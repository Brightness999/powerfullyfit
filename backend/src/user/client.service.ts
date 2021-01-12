import {
  Injectable,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';

import * as sgMail from '@sendgrid/mail';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './entities/user.entity';
import { Client } from './entities/client.entity';

import { CreateUserDto } from './dto/create-user.dto';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  createClient(createClientDto: CreateClientDto) {
    const user = this.clientRepository.create(createClientDto);

    return this.clientRepository.save(user);
  }

  findAllClients() {
    return this.clientRepository.find({
      relations: ['coach', 'coach.organization', 'assignedPrograms', 'logo'],
    });
  }

  async findOneClient(id: number) {
    const user = await this.clientRepository.findOne(id, {
      relations: ['coach', 'coach.organization', 'assignedPrograms', 'logo'],
    });

    if (!user)
      throw new NotFoundException(`Client with id: ${id} was not Found`);

    return user;
  }

  async updateClient(id: number, updateUserDto: UpdateClientDto) {
    const user: Client = await this.clientRepository.preload({
      id: id,
      ...updateUserDto,
    });

    if (!user) throw new NotFoundException();

    return this.clientRepository.save(user);
  }

  async removeClient(id: number) {
    const user: Client = await this.findOneClient(id);

    return this.clientRepository.remove(user);
  }
}
