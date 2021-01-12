import { Test, TestingModule } from '@nestjs/testing';
import { ExternalAssetService } from './external-asset.service';

describe('ExternalAssetService', () => {
  let service: ExternalAssetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExternalAssetService],
    }).compile();

    service = module.get<ExternalAssetService>(ExternalAssetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
