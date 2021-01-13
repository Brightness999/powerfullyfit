import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { JwtModule } from '@nestjs/jwt';

import { Message } from './entities/message.entity';

import { MessageService } from './message.service';

import { MessageGateway } from './message.gateway';
import { MessageController } from './message.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Message]),
    JwtModule.register({
      secret:
        'Sw9jOIjMc3CJmfhn0PjUopvBcNuKv9OhJkVDo1TQK5lCovg5Lwwmaduepq9VN189wqkjl0oEazPwf22u7j8ZCvskXfdanZFGcbcZFHAlXU4wOC2K1MNTHo8WmxZ/3Aiygc4GwapB5HAPbAk7Zb7DmKJ/QOXLoDr2ySCzwiKdWfoAAwziRs1w54NLXIeCs9B1LXCKfmSCejpAqEQksLfKeAVXS/zbPmH++eHsUmBDdLMwDLuvRlQK34uXXut6WcDt5VqGcvjhr3O1KaAgYYy/kFGwIHMGY4uFAkGVIVQbQSwo3oWX3P/6JDZ5EAq4yznOqldxSoXmHSpfG91RlrcKlA==',
    }),
  ],
  providers: [MessageGateway, MessageService],
  controllers: [MessageController],
})
export class MessageModule {}
