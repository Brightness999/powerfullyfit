import { Test, TestingModule } from '@nestjs/testing';
import { TermController } from './term.controller';
import { TermService } from './term.service';

describe('TermController', () => {
  let controller: TermController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TermController],
      providers: [TermService],
    }).compile();

    controller = module.get<TermController>(TermController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
