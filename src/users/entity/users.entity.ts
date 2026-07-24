import { ExerciseDiary } from "src/exercise-diary/entity/exercise-diary.entity";
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

}