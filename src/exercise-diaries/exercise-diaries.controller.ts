import { Body, Controller, Get, Param, Patch, Post, Request } from '@nestjs/common';
import { ExerciseDiariesService } from './exercise-diaries.service';
import { CreateExerciseDiaryDTO } from './dto/create-exercise-diary.dto';
import { UpdateExerciseDiaryDTO } from './dto/update-exercise-diary.dto';

@Controller('exercise-diaries')
export class ExerciseDiariesController {
  constructor(private exerciseDiariesService: ExerciseDiariesService){}

  @Post()
  createExerciseDiary(@Request() req, @Body() createExerciseDiary:CreateExerciseDiaryDTO){
    return this.exerciseDiariesService.create(req.user.userId, createExerciseDiary)
  }

  @Get()
  getAllUserExerciseDiary(@Request() req){
    return this.exerciseDiariesService.getAll(req.user.user_id);
  } 

  @Get(":id")
  getUserExerciseDiary(@Param('id') id:string){
    return this.exerciseDiariesService.get(id);
  }
  @Patch(":id")
  updateExerciseDiary(@Param('id') id:string,@Body() updateExerciseDiaryDTO:UpdateExerciseDiaryDTO){
    return this.exerciseDiariesService.update(id,updateExerciseDiaryDTO)
  }


}
