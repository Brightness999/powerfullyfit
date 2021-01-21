import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { Workout } from './entities/workout.entity';
import { WorkoutExercise } from './entities/workout-exercise.entity';

import { WorkoutService } from './workout.service';
import { WorkoutController } from './workout.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Workout, WorkoutExercise])],
  controllers: [WorkoutController],
  providers: [WorkoutService],
})
export class WorkoutModule {}
