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

import { CalendarEvent } from '@app/calendar-event/entities/calendar-event.entity';

@Entity()
export class Activity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(
    type => CalendarEvent,
    calendarEvent => calendarEvent.workout,
  )
  calendarEvents: CalendarEvent[];
}
