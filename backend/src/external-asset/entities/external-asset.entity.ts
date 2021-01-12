import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class ExternalAsset {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column()
  type: string;

  @Column({ default: new Date() })
  createTime: Date;

  exercises: any;
}
