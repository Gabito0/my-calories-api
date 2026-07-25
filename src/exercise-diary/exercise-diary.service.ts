import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExerciseDiary } from './entity/exercise-diary.entity';
import { Repository } from 'typeorm';
import { CreateExerciseDiaryDTO } from './dto/create-exercise-diary.dto';
@Injectable()
export class ExerciseDiaryService {

  constructor(
    @InjectRepository(ExerciseDiary)
    private readonly exerciseDiaryRepository: Repository<ExerciseDiary>
  ){}

  async create(id:string, createExerciseDiaryDTO: CreateExerciseDiaryDTO): Promise<ExerciseDiary | null>{
    const newExerciseDiary = this.exerciseDiaryRepository.create({user: {id}});

    this.exerciseDiaryRepository.merge(newExerciseDiary, createExerciseDiaryDTO);

    return await this.exerciseDiaryRepository.save(newExerciseDiary)
    

  }
}
