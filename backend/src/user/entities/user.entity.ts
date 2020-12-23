import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinTable,
  TableInheritance,
} from 'typeorm';

import { externalAsset } from './../../common/entities/external-asset.entity';

@Entity('app_user')
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  password: string;

  logo: externalAsset; // TODO: external asset

  @Column({ default: new Date() })
  createTime: Date;
}
