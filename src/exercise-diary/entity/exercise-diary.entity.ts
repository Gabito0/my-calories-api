import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../users/entity/users.entity";
@Entity({name: 'exercise_diary'})
export class ExerciseDiary {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
  
  @ManyToOne(()=> User, (user)=>user.exerciseDiaries)
  @JoinColumn({name: 'user_id'})
  user!:User

  @Column({type:'date'})
  start_time!:Date;

  @Column({type:'date'})
  end_time!:Date

  @Column({type:'text'})
  notes!: string;
  
 
  

}
