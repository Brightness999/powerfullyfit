import {
  Injectable,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';

import * as sgMail from '@sendgrid/mail';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Coach } from './entities/coach.entity';
import { Client } from './entities/client.entity';
import { User } from './entities/user.entity';

import { CreateClientDto } from './dto/create-client.dto';
import { CreateCoachDto } from './dto/create-coach.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateCoachDto } from './dto/update-coach.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class UserService {
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

  x() {
    sgMail.setApiKey(
      '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',
    );

    const msg = {
      to: 'faridgarciayala@icloud.com', // Change to your recipient
      from: 'test@example.com', // Change to your verified sender
      subject: 'Sending with SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };

    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent');
      })
      .catch(error => {
        console.error(error);
        console.error(error.response.body.errors);
      });
  }

  createClient(createClientDto: CreateClientDto) {
    // const user = this.clientRepository.create(createClientDto);

    // return this.clientRepository.save(user);

    this.x();

    return {};
  }

  findAllClients() {
    return this.clientRepository.find();
  }

  findAllCoaches() {
    return this.coachRepository.find();
  }

  async findOneByEmail(email: string) {
    console.log(email);

    const user = await this.userRepository.findOne({
      where: [{ email }],
      relations: ['organization', 'coach'],
    });

    console.log(user);

    return user;
  }

  async findOneClient(id: number) {
    const user = await this.clientRepository.findOne(id, {
      relations: ['coach', 'coach.organization', 'assignedPrograms'],
    });

    if (!user)
      throw new NotFoundException(`Client with id: ${id} was not Found`);

    return user;
  }

  async findOneCoach(id: number) {
    const user = await this.coachRepository.findOne(id);

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

  async updateClient(id: number, updateUserDto: UpdateClientDto) {
    const user: Client = await this.clientRepository.preload({
      id: id,
      ...updateUserDto,
    });

    if (!user) throw new NotFoundException();

    return this.clientRepository.save(user);
  }

  async removeCoach(id: number) {
    const user: Coach = await this.findOneCoach(id);

    return this.coachRepository.remove(user);
  }

  async removeClient(id: number) {
    const user: Client = await this.findOneClient(id);

    return this.clientRepository.remove(user);
  }
}
