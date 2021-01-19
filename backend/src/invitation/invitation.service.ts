import { Injectable, NotFoundException } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ClientService } from '@app/user/client.service';
import { CreateClientDto } from '@app/user/dto/create-client.dto';

// import { NotificationGateway } from '@app/notification/notification.gateway';
import { EmailService } from '@app/notification/email.service';

import { Invitation } from './entities/invitation.entity';
import { ClientInvitation } from './entities/client-invitation.entity';
import { CoachInvitation } from './entities/coach-invitation.entity';

import { CreateInvitationDto } from './dto/create-invitation.dto';
import { CreateClientInvitationDto } from './dto/create-client-invitation.dto';
import { CreateCoachInvitationDto } from './dto/create-coach-invitation.dto';

import { UpdateInvitationDto } from './dto/update-invitation.dto';

@Injectable()
export class InvitationService {
  constructor(
    @InjectRepository(Invitation)
    private readonly invitationRepository: Repository<Invitation>,
    @InjectRepository(ClientInvitation)
    private readonly clientInvitationRepository: Repository<ClientInvitation>,
    @InjectRepository(CoachInvitation)
    private readonly coachInvitationRepository: Repository<CoachInvitation>,
    private readonly clientService: ClientService,
    private readonly emailService: EmailService,
  ) {}

  createClientInvitation(createClientInvitationDto: CreateClientInvitationDto) {
    const invitation = this.clientInvitationRepository.create(
      createClientInvitationDto,
    );

    this.emailService.sendEmail(createClientInvitationDto.email);

    return this.invitationRepository.save(invitation);
  }

  createCoachInvitation(createInvitationDto: CreateCoachInvitationDto) {
    const invitation = this.coachInvitationRepository.create(
      createInvitationDto,
    );

    this.emailService.sendEmail(createInvitationDto.email);

    return this.invitationRepository.save(invitation);
  }

  async acceptInvitation(id: number) {
    const invitation: Invitation = await this.invitationRepository.findOne(id);

    if (!invitation)
      throw new NotFoundException(`Invitation with id: ${id} was not Found`);

    let newClient = {
      ...invitation,
      coach: null,
      password: '',
    } as CreateClientDto;

    this.clientService.createClient(newClient);

    this.invitationRepository.remove(invitation);
  }

  findAll() {
    return this.invitationRepository.find();
  }

  async findOne(id: number) {
    const invite = await this.invitationRepository.findOne(id);

    return invite;
  }

  update(id: number, updateInvitationDto: UpdateInvitationDto) {
    return `This action updates a #${id} invitation`;
  }

  async remove(id: number) {
    const invite = await this.invitationRepository.findOne(id);

    console.log(invite);

    return this.invitationRepository.remove(invite);
  }
}
