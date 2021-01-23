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
// import { JwtAuthGuard } from '@app/auth/guards/jwt-auth.guard';

import { MessageService } from './message.service';

import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

import { Server, Socket } from 'socket.io';
import { json } from 'express';

@WebSocketGateway()
// @UseGuards(JwtAuthGuard)
export class MessageGateway implements OnGatewayConnection {
  @WebSocketServer() wss: Server;

  // connections = {};
  wsClients=[];

  constructor(
    private readonly messageService: MessageService,
    private readonly jwtService: JwtService,
  ) { }

  async handleConnection(client: any, ...args: any) {
    console.log('connected');

    this.wsClients.push(client);
    client.emit('connected', 'connected');
  }

  handleDisconnect(client:any) {
    for (let i = 0; i < this.wsClients.length; i++) {
      if (this.wsClients[i] === client) {
        this.wsClients.splice(i, 1);
        break;
      }
    }
    console.log('disconnected');
    this.broadcast('disconnect',{});
  }

  private broadcast(event, message: any) {
    const broadCastMessage = JSON.stringify(message);
    for (let c of this.wsClients) {
      c.emit(event, broadCastMessage);
    }
  }


  @SubscribeMessage('createMessage')
  create(
    @MessageBody() data: CreateMessageDto,
    @ConnectedSocket() client: Socket,
  ): any {
    let user: any = this.jwtService.verify(client.handshake.query.token).user;
    data['from'] = user;
    this.messageService.create(data);
    // client.emit('createMessage', { ...data, from: user })
    this.broadcast('createMessage', { ...data, from: user })
  }

  @SubscribeMessage('getMessagesBetweenSelectedClientAndUser')
  async getAllMessages(
    @MessageBody() to: number,
    @ConnectedSocket() client: Socket,
  ): Promise<any> {
    let from: any = this.jwtService.verify(client.handshake.query.token).user.id;
    let result = await this.messageService.findAll({from: from, to: to});
    this.broadcast('getMessagesBetweenSelectedClientAndUser', result);
  }

  // @SubscribeMessage('findAllMessage')
  // findAll() {
  //   return this.messageService.findAll();
  // }

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
