import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinTable,
  JoinColumn,
} from 'typeorm';

import { User } from '@app/user/entities/user.entity';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @JoinColumn({ name: 'to' })
  @ManyToOne(() => User)
  to: User;

  @JoinColumn({ name: 'from' })
  @ManyToOne(() => User)
  from: User;

  @Column({ default: new Date() })
  createTime: Date;
}
