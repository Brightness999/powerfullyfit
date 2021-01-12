import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { Notification } from './entities/notification.entity';

import { NotificationService } from './notification.service';
import { NotificationGateway } from './notification.gateway';
import { EmailService } from './email.service';
import { NotificationController } from './notification.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Notification])],
  providers: [NotificationGateway, NotificationService, EmailService],
  controllers: [NotificationController],
  exports: [NotificationGateway, NotificationService, EmailService],
})
export class NotificationModule {}
