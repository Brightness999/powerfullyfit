import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinTable,
  TableInheritance,
  ManyToOne,
  JoinColumn,
  ManyToMany,
} from 'typeorm';

import { Workout } from '@app/workout/entities/workout.entity';

import { ExternalAsset } from '@app/external-asset/entities/external-asset.entity';

@Entity()
export class Exercise {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(
    type => Workout,
    workout => workout.exercises,
    { lazy: true },
  )
  workouts: Workout[];

  @ManyToOne(() => ExternalAsset)
  @JoinColumn({ name: 'logoId' })
  logo: ExternalAsset;

  @Column({ default: new Date() })
  createTime: Date;
}
