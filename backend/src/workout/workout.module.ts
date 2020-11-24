import { Module } from '@nestjs/common';
import { WorkoutService } from './workout.service';
import { WorkoutController } from './workout.controller';

@Module({
  controllers: [WorkoutController],
  providers: [WorkoutService]
})
export class WorkoutModule {}
