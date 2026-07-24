import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseDiaryController } from './exercise-diary.controller';

describe('ExerciseDiaryController', () => {
  let controller: ExerciseDiaryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExerciseDiaryController],
    }).compile();

    controller = module.get<ExerciseDiaryController>(ExerciseDiaryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
