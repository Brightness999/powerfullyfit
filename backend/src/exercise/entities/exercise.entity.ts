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

import { WorkoutExercise } from '@app/workout/entities/workout-exercise.entity';

import { ExternalAsset } from '@app/external-asset/entities/external-asset.entity';

@Entity()
export class Exercise {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(
    type => WorkoutExercise,
    workoutExercise => workoutExercise.exercise,
    { lazy: true },
  )
  @JoinTable()
  workouts: WorkoutExercise[];

  @ManyToOne(() => ExternalAsset, {
    eager: true,
  })
  @JoinColumn({ name: 'logoId' })
  logo: ExternalAsset;

  @Column({ default: new Date() })
  createTime: Date;
}
