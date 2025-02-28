import { Entity, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm'; // Add imports for createDate and UpdateDate here
import { AbstractBaseEntity } from '../../../entities/base.entity';
import { Organisation } from '../../organisations/entities/organisations.entity';

@Entity()
export class Invite extends AbstractBaseEntity {
  @Column({ nullable: false })
  token: string;

  @Column({ nullable: true })
  email: string;

  @Column({ default: false })
  isGeneric: boolean;

  @Column({ default: false })
  isAccepted: boolean;

  @ManyToOne(() => Organisation, organisation => organisation.invites, { nullable: false, onDelete: 'CASCADE' })
  organisation: Organisation;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
