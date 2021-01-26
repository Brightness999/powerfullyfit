import { Module, forwardRef } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from '@app/auth/auth.module';
import { NotificationModule } from '@app/notification/notification.module';

import { Coach } from './entities/coach.entity';
import { User } from './entities/user.entity';
import { Client } from './entities/client.entity';

import { UserService } from './user.service';
import { CoachService } from './coach.service';
import { ClientService } from './client.service';
import { UserController } from './user.controller';
import { ClientController } from './client.controller';
import { CoachController } from './coach.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './../auth/constants';

@Module({
  imports: [
    TypeOrmModule.forFeature([Coach, User, Client]),
    forwardRef(() => AuthModule),
    NotificationModule,
    JwtModule.register({
      secret: jwtConstants.secret,
    }),
  ],
  controllers: [UserController, ClientController, CoachController],
  providers: [UserService, CoachService, ClientService],
  exports: [UserService, CoachService, ClientService],
})
export class UserModule {}
