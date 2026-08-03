import { Module } from '@nestjs/common';
import { ExerciseDiariesService } from './exercise-diaries.service';
import { ExerciseDiariesController } from './exercise-diaries.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entity/user.entity';
import { ExerciseDiary } from './entity/exercise-diary.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ExerciseDiary,User])],
  providers: [ExerciseDiariesService],
  controllers: [ExerciseDiariesController]
})
export class ExerciseDiariesModule {}
