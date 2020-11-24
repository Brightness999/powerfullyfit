import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { Program } from './entities/program.entity';

import { ProgramService } from './program.service';
import { ProgramController } from './program.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Program])],
  controllers: [ProgramController],
  providers: [ProgramService],
})
export class ProgramModule {}
