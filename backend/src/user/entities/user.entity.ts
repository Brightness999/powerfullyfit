import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinTable,
  TableInheritance,
  ManyToOne,
  BeforeInsert,
  JoinColumn,
} from 'typeorm';

import { ExternalAsset } from '@app/external-asset/entities/external-asset.entity';

import { Message } from '@app/message/entities/message.entity';

@Entity('app_user')
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @JoinTable()
  @OneToMany(
    type => Message,
    message => message.to,
  )
  deliveredMessages;

  @JoinTable()
  @OneToMany(
    type => Message,
    message => message.from,
  )
  receivedMessages;

  @ManyToOne(() => ExternalAsset)
  @JoinColumn({ name: 'logoId' })
  logo: ExternalAsset; // TODO: external asset

  @Column({ default: new Date() })
  createTime: Date;

  @BeforeInsert()
  emailToLowerCase() {
    this.email = this.email.toLowerCase();
  }
}
