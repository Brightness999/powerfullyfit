import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinTable,
} from 'typeorm';

import { externalAsset } from '@app/common/entities/external-asset.entity';

import { Coach } from '@app/user/entities/coach.entity';

@Entity()
export class Organization {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  logo: externalAsset;

  @JoinTable()
  @OneToMany(
    type => Coach,
    coach => coach.organization,
  )
  coaches: Coach[];

  @Column({ default: new Date() })
  createTime: Date;
}