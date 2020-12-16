import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinTable,
  ChildEntity,
} from 'typeorm';

import { Coach } from '@app/user/entities/coach.entity';

@Entity()
export class Program {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  creator: any;

  @Column({ default: new Date() })
  createTime: Date;

  @ManyToOne(
    type => Coach,
    coach => coach.programs,
  )
  coach: Coach;
}
