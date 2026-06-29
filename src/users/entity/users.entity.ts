import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'users'})
export class User{
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({unique: true})
  email!: string;

  @Column()
  password_hash!: string;

  @Column({default: false})
  verified!: boolean;

  @CreateDateColumn({type: 'timestamptz'})
  created_at!: Date;

  @Column({type: 'text', nullable: true})
  subject_identifier!: string | null;


}