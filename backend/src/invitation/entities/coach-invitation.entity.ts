import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinTable,
  TableInheritance,
  ManyToOne,
  JoinColumn,
  ChildEntity,
} from 'typeorm';

import { Invitation } from './invitation.entity';
import { Organization } from '@app/organization/entities/organization.entity';

@ChildEntity()
export class CoachInvitation extends Invitation {
  @ManyToOne(() => Organization, {
    eager: true,
  })
  @JoinColumn({ name: 'organizationId' })
  organization: Organization;
}
