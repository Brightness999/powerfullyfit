import { Test, TestingModule } from '@nestjs/testing';
import { TermService } from './term.service';

describe('TermService', () => {
  let service: TermService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TermService],
    }).compile();

    service = module.get<TermService>(TermService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
