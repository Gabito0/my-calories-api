import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseLogsService } from './exercise-logs.service';

describe('ExerciseLogService', () => {
  let service: ExerciseLogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExerciseLogsService],
    }).compile();

    service = module.get<ExerciseLogsService>(ExerciseLogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
