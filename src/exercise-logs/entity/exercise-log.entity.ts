import { ExerciseDiary } from "@/exercise-diaries/entity/exercise-diary.entity";
import { User } from "@/users/entity/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'exercise_logs'})
export class ExerciseLog {
  @PrimaryGeneratedColumn('uuid')
  id!:string;

  @ManyToOne(()=>User, (user)=>user.exerciseLogs)
  @JoinColumn({name:'user_id'})
  user!:User;
  @Column()
  user_id!:string;

  @ManyToOne(()=>ExerciseDiary, (exerciseDiary)=>exerciseDiary.exerciseLogs)
  @JoinColumn({name:'exercise_diary_id'})
  exerciseDiary!:ExerciseDiary;
  @Column()
  exercise_diary_id!:string;

  @Column({type:'timestamptz'})
  logged_at!:Date;

  @Column({type: 'int', nullable:true})
  set!: number;

  @Column({type: 'int', nullable:true})
  reps!: number;

  @Column({type:'text', nullable:true})
  notes!:string

  @Column({type:'float', nullable:true})
  weight!:number;

  @Column({type:'int', nullable:true})
  time_seconds!:number;

  @Column({type:'float', nullable:true})
  distance!:number;

  
}
