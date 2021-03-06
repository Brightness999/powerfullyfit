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

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class Invitation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column({ default: new Date() })
  createTime: Date;
}
