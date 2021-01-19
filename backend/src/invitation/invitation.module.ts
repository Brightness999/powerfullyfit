import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationModule } from '@app/notification/notification.module';
import { UserModule } from '@app/user/user.module';

import { Invitation } from './entities/invitation.entity';
import { ClientInvitation } from './entities/client-invitation.entity';
import { CoachInvitation } from './entities/coach-invitation.entity';

import { InvitationService } from './invitation.service';
import { InvitationController } from './invitation.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Invitation, ClientInvitation, CoachInvitation]),
    NotificationModule,
    UserModule,
  ],
  controllers: [InvitationController],
  providers: [InvitationService],
})
export class InvitationModule {}
