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

  findOneByEmail(email: string) {
    console.log(email);

    const user = this.userRepository.findOne({
      where: [{ email }],
      relations: ['organization', 'coach'],
    });

    return user;
  }
}
