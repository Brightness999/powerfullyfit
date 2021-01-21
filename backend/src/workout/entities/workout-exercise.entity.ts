import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  ManyToMany,
  JoinTable,
  ChildEntity,
  JoinColumn,
} from 'typeorm';

import { Workout } from './workout.entity';
import { Exercise } from '@app/exercise/entities/exercise.entity';

@Entity()
export class WorkoutExercise {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    type => Exercise,
    exercise => exercise.workouts,
    { eager: true },
  )
  exercise: Exercise;

  @ManyToOne(
    type => Workout,
    workout => workout.exercises,
  )
  workout: Workout;

  @Column()
  sets: number;

  @Column()
  reps: number;

  @Column()
  time: string;

  @Column()
  order: number;
}
