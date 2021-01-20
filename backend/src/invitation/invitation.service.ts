import { Injectable, NotFoundException } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateClientDto } from '@app/user/dto/create-client.dto';
import { CreateCoachDto } from '@app/user/dto/create-coach.dto';

import { OrganizationService } from '@app/organization/organization.service';
import { ClientService } from '@app/user/client.service';
import { CoachService } from '@app/user/coach.service';
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
    private readonly coachService: CoachService,
    private readonly clientService: ClientService,
    private readonly emailService: EmailService,
  ) {}

  async createClientInvitation(createInvitationDto: CreateClientInvitationDto) {
    const invitation = this.clientInvitationRepository.create(
      createInvitationDto,
    );

    let insertedInvitation = await this.clientInvitationRepository.save(
      invitation,
    );

    this.emailService.sendClientInvitationEmail(insertedInvitation);

    return insertedInvitation;
  }

  async createCoachInvitation(createInvitationDto: CreateCoachInvitationDto) {
    const invitation = this.coachInvitationRepository.create(
      createInvitationDto,
    );

    let insertedInvitation = await this.coachInvitationRepository.save(
      invitation,
    );

    this.emailService.sendCoachInvitationEmail(insertedInvitation);

    return insertedInvitation;
  }

  async acceptCoachInvitation(id: number, password: string) {
    const invitation: CoachInvitation = await this.coachInvitationRepository.findOne(
      id,
    );

    if (!invitation)
      throw new NotFoundException(`Invitation with id: ${id} was not Found`);

    let newCoach = {
      ...invitation,
      role: 'SUPER ADMIN',
      password,
    } as CreateCoachDto;

    this.coachService.createCoach(newCoach);

    this.coachInvitationRepository.remove(invitation);
  }

  async acceptClientInvitation(id: number, password: string) {
    const invitation: Invitation = await this.invitationRepository.findOne(id);

    if (!invitation)
      throw new NotFoundException(`Invitation with id: ${id} was not Found`);

    let newClient = {
      ...invitation,
      coach: null,
      password,
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

  async findCoachOne(id: number) {
    const invite = await this.coachInvitationRepository.findOne(id);

    return invite;
  }

  async findClientOne(id: number) {
    const invite = await this.clientInvitationRepository.findOne(id);

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
