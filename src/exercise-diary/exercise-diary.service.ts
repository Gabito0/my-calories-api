import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExerciseDiary } from './entity/exercise-diary.entity';
import { Repository } from 'typeorm';
import { CreateExerciseDiaryDTO } from './dto/create-exercise-diary.dto';
import { UpdateExerciseDiaryDTO } from './dto/update-exercise-diary.dto';
import { User } from 'src/users/entity/users.entity';
@Injectable()
export class ExerciseDiaryService {

  constructor(
    @InjectRepository(ExerciseDiary)
    private readonly exerciseDiaryRepository: Repository<ExerciseDiary>
  ){}

  async create(id:string, createExerciseDiaryDTO: CreateExerciseDiaryDTO): Promise<ExerciseDiary | null>{
    const newExerciseDiary = this.exerciseDiaryRepository.create({user_id: id});

    this.exerciseDiaryRepository.merge(newExerciseDiary, createExerciseDiaryDTO);

    return await this.exerciseDiaryRepository.save(newExerciseDiary)
    

  }

  
  async get(id:string, time:Date): Promise<ExerciseDiary | undefined>{
    if(time){
      const exerciseDiary = await this.exerciseDiaryRepository.findOne({where: {id:id, start_time:time}})
      return exerciseDiary? exerciseDiary: undefined;
    }

    const exerciseDiary = await this.exerciseDiaryRepository.findOne({where:{id:id}, order:{start_time:'DESC'}})

    return exerciseDiary? exerciseDiary : undefined;
  }

  async getAll(user_id: string): Promise<ExerciseDiary[] | null>{
    const exerciseDiaries = this.exerciseDiaryRepository.find({where:{user_id:user_id}, order:{start_time:'DESC'}});

    return exerciseDiaries;
  }

  // async update(id:string, updateExerciseDiaryDTO: UpdateExerciseDiaryDTO): Promise<ExerciseDiary | null>{
  //   const exerciseDiary = await this.exerciseDiaryRepository.findOneByOrFail({id:id})

  //   this.exerciseDiaryRepository.merge(exerciseDiary, updateExerciseDiaryDTO)

  //   return this.exerciseDiaryRepository.save(exerciseDiary);
  // }
  

}
