import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../users/entity/users.entity";
@Entity({name: 'exercise_diary'})
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
  
 
  

}
