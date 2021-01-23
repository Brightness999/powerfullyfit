import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { JwtModule } from '@nestjs/jwt';

import { Message } from './entities/message.entity';

import { MessageService } from './message.service';

import { MessageGateway } from './message.gateway';

import { jwtConstants } from '../auth/constants';
// import { MessageController } from './message.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Message]),
    JwtModule.register({
      secret: jwtConstants.secret,
    }),
  ],
  providers: [MessageGateway, MessageService],
  // controllers: [MessageController],
})
export class MessageModule {}
