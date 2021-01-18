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

import { Coach } from '@app/user/entities/coach.entity';
import { Client } from '@app/user/entities/client.entity';
// import { Workout } from '@app/workout/entities/workout.entity';

import { ProgramDay } from './program-day.entity';
import { CalendarEvent } from '@app/calendar-event/entities/calendar-event.entity';
import { AssignedProgram } from './assigned-program.entity';

@Entity()
export class Program {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  weeks: number;

  @Column()
  phases: number;

  // @JoinTable()
  // @ManyToMany(
  //   type => Workout,
  //   workout => workout.program,
  // )
  // workouts: Workout[];

  // @JoinTable()
  // @OneToMany(
  //   type => CalendarEvent,
  //   calendarEvent => calendarEvent.program,
  // )
  // calendarEvents: CalendarEvent[];

  days: ProgramDay[];

  @JoinTable()
  @OneToMany(
    type => Client,
    client => client.program,
  )
  clients: Client[];

  @Column({ default: new Date() })
  createTime: Date;

  @ManyToOne(
    type => Coach,
    coach => coach.programs,
  )
  coach: Coach;

  // @JoinTable()
  // @OneToMany(
  //   type => AssignedProgram,
  //   assignedProgram => assignedProgram.program,
  // )
  // assignedPrograms: AssignedProgram[];
}
