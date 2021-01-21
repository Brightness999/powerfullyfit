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

import { Coach } from '@app/user/entities/coach.entity';
import { WorkoutExercise } from './workout-exercise.entity';
import { CalendarEvent } from '@app/calendar-event/entities/calendar-event.entity';
import { Exercise } from '@app/exercise/entities/exercise.entity';

@Entity()
export class Workout {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @ManyToOne(
    type => Coach,
    coach => coach.workouts,
  )
  coach: Coach;

  @ManyToMany(
    type => CalendarEvent,
    calendarEvent => calendarEvent.workout,
  )
  calendarEvents: CalendarEvent;

  @OneToMany(
    type => WorkoutExercise,
    workoutExercise => workoutExercise.workout,
    {
      cascade: true,
    },
  )
  @JoinTable()
  exercises: WorkoutExercise[];

  @Column({ default: new Date() })
  createTime: Date;
}
