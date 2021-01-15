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
import { Program } from '@app/program/entities/program.entity';
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
    type => Program,
    program => program.workouts,
    { lazy: true },
  )
  program: Program;

  @JoinTable()
  @ManyToMany(
    type => Exercise,
    exercise => exercise.workouts,
  )
  exercises: Exercise[];

  @Column({ default: new Date() })
  createTime: Date;
}
