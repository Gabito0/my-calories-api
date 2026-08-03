import { Module } from '@nestjs/common';
import { ExerciseLogsController } from './exercise-logs.controller';
import { ExerciseLogsService } from './exercise-logs.service';

@Module({
  controllers: [ExerciseLogsController],
  providers: [ExerciseLogsService]
})
export class ExerciseLogsModule {}
