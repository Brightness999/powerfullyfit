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
import { Coach } from './coach.entity';
import { Organization } from '@app/organization/entities/organization.entity';

@ChildEntity()
export class Client extends User {
    

  @ManyToOne(
    type => Coach,
    coach => coach.clients,
  )
  coach: Coach;
}
