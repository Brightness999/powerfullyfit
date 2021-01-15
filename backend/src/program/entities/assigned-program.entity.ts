import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinTable,
  ChildEntity,
} from 'typeorm';

import { Program } from './program.entity';
import { Client } from '@app/user/entities/client.entity';

@Entity()
export class AssignedProgram extends Program {
  // @ManyToOne(
  //   type => Client,
  //   client => client.assignedPrograms,
  // )
  // assignedClient: Client;

  @Column()
  status: string;

  // @ManyToOne(
  //   type => Program,
  //   program => program.assignedPrograms,
  // )
  // program: Program;
}
