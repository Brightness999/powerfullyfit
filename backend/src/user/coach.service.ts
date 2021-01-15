import {
  Injectable,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';

import * as sgMail from '@sendgrid/mail';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';

import { User } from './entities/user.entity';
import { Coach } from './entities/coach.entity';
import { Client } from './entities/client.entity';

import { CreateUserDto } from './dto/create-user.dto';
import { CreateCoachDto } from './dto/create-coach.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateCoachDto } from './dto/update-coach.dto';

@Injectable()
export class CoachService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Coach)
    private readonly coachRepository: Repository<Coach>,
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  createCoach(createCoachDto: CreateCoachDto) {
    const user = this.coachRepository.create(createCoachDto);

    return this.coachRepository.save(user);
  }

  async findAllClients(coach: Coach) {
    const clients = await this.clientRepository.find({
      join: {
        alias: 'client',
        leftJoinAndSelect: {
          coach: 'client.coach',
          organization: 'coach.organization',
          logo: 'client.logo',
          program: 'client.program',
        },
      },
    });

    return clients.filter(client => {
      return client.coach.organization.id === coach.organization.id;
    });
  }

  findAllClientsForCoach(coach: Coach) {
    return this.clientRepository.find({
      relations: ['logo', 'program'],
      where: { coach },
    });
  }

  findAllCoaches() {
    return this.coachRepository.find({ relations: ['logo'] });
  }

  async findOneCoach(id: number) {
    const user = await this.coachRepository.findOne(id, {
      relations: ['organization'],
    });

    if (!user)
      throw new NotFoundException(`Coach with id: ${id} was not Found`);

    return user;
  }

  async updateCoach(id: number, updateUserDto: UpdateCoachDto) {
    const user: Coach = await this.coachRepository.preload({
      id: id,
      ...updateUserDto,
    });

    if (!user) throw new NotFoundException();

    return this.coachRepository.save(user);
  }

  async removeCoach(id: number) {
    const user: Coach = await this.findOneCoach(id);

    return this.coachRepository.remove(user);
  }
}
