import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinTable,
  TableInheritance,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { ExternalAsset } from '@app/external-asset/entities/external-asset.entity';

@Entity()
export class Exercise {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => ExternalAsset)
  @JoinColumn({ name: 'logoId' })
  logo: ExternalAsset;

  @Column({ default: new Date() })
  createTime: Date;
}
