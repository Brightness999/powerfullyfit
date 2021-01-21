import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkoutDto } from './create-workout.dto';

import { Coach } from '@app/user/entities/coach.entity';
import { Program } from '@app/program/entities/program.entity';
import { WorkoutExercise } from '@app/workout/entities/workout-exercise.entity';

export class UpdateWorkoutDto extends PartialType(CreateWorkoutDto) {
  exercises: WorkoutExercise[];

  createTime: Date;
}
