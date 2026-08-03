import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseDiariesService } from './exercise-diaries.service';

describe('ExerciseDiaryService', () => {
  let service: ExerciseDiariesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExerciseDiariesService],
    }).compile();

    service = module.get<ExerciseDiariesService>(ExerciseDiariesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
