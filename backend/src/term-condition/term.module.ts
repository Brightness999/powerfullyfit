import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationModule } from '@app/notification/notification.module';
import { UserModule } from '@app/user/user.module';

import { Term } from './entities/term.entity';

import { TermService } from './term.service';
import { TermController } from './term.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Term]),
    NotificationModule,
    UserModule,
  ],
  controllers: [TermController],
  providers: [TermService],
})
export class TermModule {}
