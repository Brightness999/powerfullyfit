import {
  Entity,
  Column,
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Coach } from '@app/user/entities/coach.entity';

@Entity('')
export class Term {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  content: string;
  @OneToOne(() => Coach, {
    eager: true,
  })
  @JoinColumn({ name: 'coachId' })
  coach: Coach;
}
