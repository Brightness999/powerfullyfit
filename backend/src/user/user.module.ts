import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { Coach } from './entities/coach.entity';
import { User } from './entities/user.entity';
import { Client } from './entities/client.entity';

import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Coach, User, Client])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
