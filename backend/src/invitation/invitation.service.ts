import { Injectable, NotFoundException } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ClientService } from '@app/user/client.service';
import { CreateClientDto } from '@app/user/dto/create-client.dto';

// import { NotificationGateway } from '@app/notification/notification.gateway';
import { EmailService } from '@app/notification/email.service';

import { Invitation } from './entities/invitation.entity';

import { CreateInvitationDto } from './dto/create-invitation.dto';
import { UpdateInvitationDto } from './dto/update-invitation.dto';

@Injectable()
export class InvitationService {
  constructor(
    @InjectRepository(Invitation)
    private readonly invitationRepository: Repository<Invitation>,
    private readonly clientService: ClientService,
    private readonly emailService: EmailService,
  ) {}

  createClientInvitation(createInvitationDto: CreateInvitationDto) {
    const invitation = this.invitationRepository.create(createInvitationDto);

    this.emailService.sendEmail(createInvitationDto.email);

    return this.invitationRepository.save(invitation);
  }

  createCoachInvitation(createInvitationDto: CreateInvitationDto) {
    const invitation = this.invitationRepository.create(createInvitationDto);

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
