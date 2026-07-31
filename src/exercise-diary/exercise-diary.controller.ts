import { Body, Controller, Get, Patch, Post, Request } from '@nestjs/common';
import { ExerciseDiaryService } from './exercise-diary.service';
import { CreateExerciseDiaryDTO } from './dto/create-exercise-diary.dto';
import { UpdateExerciseDiaryDTO } from './dto/update-exercise-diary.dto';

@Controller('exercise-diaries')
export class ExerciseDiaryController {
  constructor(private exerciseDiaryService: ExerciseDiaryService){}

  @Post()
  createExerciseDiary(@Request() req, @Body() createExerciseDiary:CreateExerciseDiaryDTO){
    return this.exerciseDiaryService.create(req.user.userId, createExerciseDiary)
  }

  @Get()
  getAllUserExerciseDiary(@Request() req){
    return this.exerciseDiaryService.getAll(req.user.user_id);
  }

  // @Patch(":id")
  // updateExerciseDiary(@Body() updateExerciseDiaryDTO:UpdateExerciseDiaryDTO){
  //   return this.exerciseDiaryService.update(updateExerciseDiaryDTO)
  // }


}
