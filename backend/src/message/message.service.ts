import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';

import { Message } from './entities/message.entity';

import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
  ) {}

  create(createMessageDto: CreateMessageDto) {
    const message = this.messageRepository.create(createMessageDto);

    return this.messageRepository.save(message);
  }

  async findAll(data: any) {
    const messages = await this.messageRepository.find({
      where: [{'from': data.from, 'to': data.to}, {'from': data.to, 'to': data.from}],
      join: {
        alias: 'message',
        leftJoinAndSelect: {
          from: 'message.from',
          to: 'message.to'
        },
      }
    });
    return messages;
  }

  findOne(id: number) {
    return `This action returns a #${id} message`;
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
