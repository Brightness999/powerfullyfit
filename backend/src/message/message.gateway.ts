import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WsResponse,
  OnGatewayConnection,
  WebSocketServer,
  ConnectedSocket,
} from '@nestjs/websockets';

import { UseGuards } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';

import { CurrentUser } from '@app/common/decorators/current-user.decorator';
import { JwtAuthGuard } from '@app/auth/guards/jwt-auth.guard';

import { MessageService } from './message.service';

import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

import { Server, Socket } from 'socket.io';

@WebSocketGateway()
@UseGuards(JwtAuthGuard)
export class MessageGateway implements OnGatewayConnection {
  @WebSocketServer() wss: Server;

  connections = {};

  constructor(
    private readonly messageService: MessageService,
    private readonly jwtService: JwtService,
  ) {}

  async handleConnection(client: any, ...args: any) {
    console.log('connected');

    client.join('asdf')

    console.log(this.wss);

    let user: any = await this.jwtService.verify(client.handshake.query.token)
      .user;

    // console.log(user);

    // this.connections[user.id] = client.conn.id;

    // console.log(this.connections);
  }

  @SubscribeMessage('createMessage')
  create(@MessageBody() createMessageDto: CreateMessageDto) {
    console.log(createMessageDto);

    this.wss.to('Fhtm2yNOsWea8ElcAAAC').emit('createMessage', createMessageDto);

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
