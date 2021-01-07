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

  @Column({ default: new Date() })
  createTime: Date;

  @ManyToOne(
    type => Coach,
    coach => coach.programs,
  )
  coach: Coach;

  @JoinTable()
  @OneToMany(
    type => AssignedProgram,
    assignedProgram => assignedProgram.program,
  )
  assignedPrograms: AssignedProgram[];
}
