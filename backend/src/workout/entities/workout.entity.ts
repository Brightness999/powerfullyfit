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
import { Program } from '@app/program/entities/program.entity';

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
    type => Program,
    program => program.workouts,
  )
  program: Program;

  @Column({ default: new Date() })
  createTime: Date;
}
