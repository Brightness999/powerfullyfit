import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinTable,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import { ExternalAsset } from '@app/external-asset/entities/external-asset.entity';

import { Coach } from '@app/user/entities/coach.entity';

@Entity()
export class Organization {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => ExternalAsset, {
    eager: true,
  })
  @JoinColumn({ name: 'logoId' })
  logo: ExternalAsset;

  @JoinTable()
  @OneToMany(
    type => Coach,
    coach => coach.organization,
  )
  coaches: Coach[];

  @Column({ default: new Date() })
  createTime: Date;
}
