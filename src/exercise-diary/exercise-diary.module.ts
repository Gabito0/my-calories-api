import { Module } from '@nestjs/common';
import { ExerciseDiaryService } from './exercise-diary.service';
import { ExerciseDiaryController } from './exercise-diary.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entity/users.entity';
import { ExerciseDiary } from './entity/exercise-diary.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ExerciseDiary,User])],
  providers: [ExerciseDiaryService],
  controllers: [ExerciseDiaryController]
})
export class ExerciseDiaryModule {}
