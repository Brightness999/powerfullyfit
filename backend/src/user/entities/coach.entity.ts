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
import { externalAsset } from './../../common/entities/external-asset.entity';

import { User } from './user.entity';
import { Client } from './client.entity';
import { Organization } from '@app/organization/entities/organization.entity';

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

  @ManyToOne(
    type => Organization,
    organization => organization.coaches,
  )
  organization: Organization;
}
