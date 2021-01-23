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

  compare = (a:any, b:any) => {
    const m = a.createTime;
    const n = b.createTime;
    let comparison = 0;
    if (m > n) {
      comparison = -1;
    } else if (m < n) {
      comparison = 1;
    }
    return comparison;
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
          // deliveredMessages: 'client.deliveredMessages',
          // receivedMessages: 'client.receivedMessages',
        },
      },
      where: {coach : coach.id}
    });

    // return clients.filter(client => {
    //   console.log('____+++++++++', client.coach.organization.id, coach.organization.id);
    //   return client.coach.organization.id === coach.organization.id;
    // });

    // let result: any = [];
    // clients.map((client:any)=>{
    //   let temp = client.deliveredMessages.concat(client.receivedMessages);
    //   temp.sort(this.compare);
    //   let {deliveredMessages, receivedMessages, ...rest} = client;
    //   result.push({...rest, latestChat: temp.length? temp[0]: {}});
    // });
    // return result;
    return clients;
  }

  findAllClientsForCoach(coach: Coach) {
    return this.clientRepository.find({
      relations: ['logo', 'program'],
      where: { coach },
    });
  }

  findAllCoaches() {
    console.log('findAllCoaches-------');
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
