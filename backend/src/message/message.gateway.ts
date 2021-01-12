import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WsResponse,
  OnGatewayConnection,
  WebSocketServer,
} from '@nestjs/websockets';

import { MessageService } from './message.service';

import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

import { Server } from 'socket.io';

@WebSocketGateway({ namespace: '/messages' })
export class MessageGateway implements OnGatewayConnection {
  @WebSocketServer() wss: Server;

  constructor(private readonly messageService: MessageService) {}

  handleConnection(client: any, ...args: any) {
    console.log('connected');
  }

  @SubscribeMessage('createMessage')
  create(@MessageBody() createMessageDto: CreateMessageDto) {
    console.log('createMessage');

    this.wss.emit('createMessage', createMessageDto);

    // return { event: 'createMessage', data: createMessageDto.text };
  }

  @SubscribeMessage('findAllMessage')
  findAll() {
    return this.messageService.findAll();
  }

  @SubscribeMessage('findOneMessage')
  findOne(@MessageBody() id: number) {
    return this.messageService.findOne(id);
  }

  @SubscribeMessage('updateMessage')
  update(@MessageBody() updateMessageDto: UpdateMessageDto) {
    return this.messageService.update(updateMessageDto.id, updateMessageDto);
  }

  @SubscribeMessage('removeMessage')
  remove(@MessageBody() id: number) {
    return this.messageService.remove(id);
  }
}
