import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { Workout } from './entities/workout.entity';

import { WorkoutService } from './workout.service';
import { WorkoutController } from './workout.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Workout])],
  controllers: [WorkoutController],
  providers: [WorkoutService],
})
export class WorkoutModule {}
