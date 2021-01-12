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
import { Client } from './client.entity';
import { Organization } from '@app/organization/entities/organization.entity';
import { Program } from '@app/program/entities/program.entity';
import { Workout } from '@app/workout/entities/workout.entity';

@ChildEntity()
export class Coach extends User {
  @Column({
    type: 'enum',
    enum: CoachRole,
  })
  role: CoachRole;

  @JoinTable()
  @OneToMany(
    type => Client,
    client => client.coach,
  )
  clients: Client[];

  @JoinTable()
  @OneToMany(
    type => Program,
    program => program.coach,
  )
  programs: Program[];

  @JoinTable()
  @OneToMany(
    type => Workout,
    workout => workout.coach,
  )
  workouts: Workout[];

  @ManyToOne(
    type => Organization,
    organization => organization.coaches,
  )
  organization: Organization;
}
