import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseDiariesController} from './exercise-diaries.controller';

describe('ExerciseDiaryController', () => {
  let controller: ExerciseDiariesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExerciseDiariesController],
    }).compile();

    controller = module.get<ExerciseDiariesController>(ExerciseDiariesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
