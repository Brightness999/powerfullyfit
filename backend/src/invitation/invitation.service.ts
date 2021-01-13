import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { NotificationGateway } from '@app/notification/notification.gateway';

import { Invitation } from './entities/invitation.entity';

import { CreateInvitationDto } from './dto/create-invitation.dto';
import { UpdateInvitationDto } from './dto/update-invitation.dto';

@Injectable()
export class InvitationService {
  constructor(
    @InjectRepository(Invitation)
    private readonly invitationRepository: Repository<Invitation>,
    private notificationGateway: NotificationGateway,
  ) {}

  create(createInvitationDto: CreateInvitationDto) {
    const invitation = this.invitationRepository.create(createInvitationDto);

    this.notificationGateway.create({});

    return this.invitationRepository.save(invitation);
  }

  findAll() {
    return this.invitationRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} invitation`;
  }

  update(id: number, updateInvitationDto: UpdateInvitationDto) {
    return `This action updates a #${id} invitation`;
  }

  remove(id: number) {
    return `This action removes a #${id} invitation`;
  }
}
