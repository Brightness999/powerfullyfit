import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';

import { Server } from 'socket.io';

import { NotificationService } from './notification.service';

import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';

@WebSocketGateway({ namespace: '/notifications' })
export class NotificationGateway {
  @WebSocketServer() wss: Server;

  constructor(private readonly notificationService: NotificationService) {}

  @SubscribeMessage('createNotification')
  create(@MessageBody() createNotificationDto: CreateNotificationDto) {
    console.log(createNotificationDto);

    this.wss.emit('createNotification', { text: 'Nest' });
  }

  @SubscribeMessage('findAllNotification')
  findAll() {
    return this.notificationService.findAll();
  }

  @SubscribeMessage('findOneNotification')
  findOne(@MessageBody() id: number) {
    return this.notificationService.findOne(id);
  }

  @SubscribeMessage('updateNotification')
  update(@MessageBody() updateNotificationDto: UpdateNotificationDto) {
    return this.notificationService.update(
      updateNotificationDto.id,
      updateNotificationDto,
    );
  }

  @SubscribeMessage('removeNotification')
  remove(@MessageBody() id: number) {
    return this.notificationService.remove(id);
  }
}
