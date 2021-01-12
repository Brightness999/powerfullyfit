import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinTable,
} from 'typeorm';

import { User } from '@app/user/entities/user.entity';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @ManyToOne(
    type => User,
    user => user.deliveredMessages,
  )
  to: User;

  @ManyToOne(
    type => User,
    user => user.receivedMessages,
  )
  from: User;

  @Column({ default: new Date() })
  createTime: Date;
}
