import { Body, Controller, Post, Request } from '@nestjs/common';
import { ExerciseDiaryService } from './exercise-diary.service';
import { CreateExerciseDiaryDTO } from './dto/create-exercise-diary.dto';

@Controller('exercise-diaries')
export class ExerciseDiaryController {
  constructor(private exerciseDiaryService: ExerciseDiaryService){}

  @Post()
  createExerciseDiary(@Request() req, @Body() createExerciseDiary:CreateExerciseDiaryDTO){
    return this.exerciseDiaryService.create(req.user.userId, createExerciseDiary)
  }
}
