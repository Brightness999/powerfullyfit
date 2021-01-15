import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinTable,
  ChildEntity,
} from 'typeorm';

import { CoachRole } from './../models/coach-role.enum';

import { User } from './user.entity';
import { Coach } from './coach.entity';
import { Organization } from '@app/organization/entities/organization.entity';
import { Program } from '@app/program/entities/program.entity';
import { AssignedProgram } from '@app/program/entities/assigned-program.entity';

@ChildEntity()
export class Client extends User {
  @ManyToOne(
    type => Coach,
    coach => coach.clients,
  )
  coach: Coach;

  // @JoinTable()
  // @OneToMany(
  //   type => AssignedProgram,
  //   assignedProgram => assignedProgram.assignedClient,
  // )
  // assignedPrograms: AssignedProgram[];

  @ManyToOne(
    type => Program,
    program => program.clients,
  )
  program: Program;
}
