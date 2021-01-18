import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  ManyToMany,
  JoinTable,
  ChildEntity,
} from 'typeorm';

import { Program } from '@app/program/entities/program.entity';
import { Workout } from '@app/workout/entities/workout.entity';
import { Activity } from './activity.entity';

@Entity()
export class CalendarEvent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: new Date() })
  start: Date;

  @Column({ default: new Date() })
  end: Date;

  @JoinTable()
  @ManyToMany(
    type => Workout,
    workout => workout.calendarEvents,
    { eager: true },
  )
  workout: Workout;

  @JoinTable()
  @ManyToMany(
    type => Activity,
    activity => activity.calendarEvents,
    { eager: true },
  )
  activity: Activity;

//   @ManyToOne(
//     type => Program,
//     program => program.calendarEvents,
//   )
//   program: Program;
}
