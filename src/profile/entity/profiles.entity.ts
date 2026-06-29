import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import {User} from "../../users/entity/users.entity"
import { Gender } from "../enum/gender.enum";


@Entity({name: 'profiles'})
export class Profile{
  @OneToOne(() => User)
  @JoinColumn({name: 'user_id'})
  user!: User;

  @PrimaryColumn()
  user_id!: string;
  
  @Column({type: 'text'})
  first_name!: string;

  @Column({type: 'text'}) 
  last_name!: string;

  @Column({type:'date'})
  birth_date!: Date;

  @Column({
    type: 'enum',
    enum:Gender,
    default: null,
    nullable: true
  })
  gender!: Gender | null;

  @Column({type: 'text'})
  height_cm!: number;
}