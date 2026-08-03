import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../users/entity/user.entity";
import { ExerciseLog } from "@/exercise-logs/entity/exercise-log.entity";
@Entity({name: 'exercise_diaries'})
export class ExerciseDiary {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
  
  @ManyToOne(()=> User, (user)=>user.exerciseDiaries)
  @JoinColumn({name: 'user_id'})
  user!:User

  @Column()
  user_id!:string;

  @Column({type:'date', unique:true})
  date_entered!:Date

  @Column({type:'text'})
  notes!: string;
  
  @OneToMany(()=>ExerciseLog,(exerciseLog)=>exerciseLog.exerciseDiary)
  exerciseLogs!:ExerciseLog[]
  

}
