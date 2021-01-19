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
import { Coach } from '@app/user/entities/coach.entity';

@ChildEntity()
export class ClientInvitation extends Invitation {
  @ManyToOne(() => Coach, {
    eager: true,
  })
  @JoinColumn({ name: 'coachId' })
  coach: Coach;
}
