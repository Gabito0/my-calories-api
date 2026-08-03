import { ExerciseDiary } from "@/exercise-diaries/entity/exercise-diary.entity";
import {ExerciseLog} from "@/exercise-logs/entity/exercise-log.entity"
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

  @OneToMany(()=> ExerciseDiary, (exerciseDiary)=>exerciseDiary.user)
  exerciseDiaries!: ExerciseDiary[]

  @OneToMany(()=>ExerciseLog,(exerciseLog)=>exerciseLog.user)
  exerciseLogs!:ExerciseLog[]

}