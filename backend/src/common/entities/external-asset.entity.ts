import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinTable,
} from 'typeorm';

export class externalAsset {
  @PrimaryGeneratedColumn()
  id: number;

  url: string;

  createTime: Date;
}
