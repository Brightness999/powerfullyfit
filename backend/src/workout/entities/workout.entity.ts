import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinTable,
  ChildEntity,
} from 'typeorm';

import { Coach } from '@app/user/entities/coach.entity';

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

  @Column({ default: new Date() })
  createTime: Date;
}
