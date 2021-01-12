import { Test, TestingModule } from '@nestjs/testing';
import { ExternalAssetController } from './external-asset.controller';
import { ExternalAssetService } from './external-asset.service';

describe('ExternalAssetController', () => {
  let controller: ExternalAssetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExternalAssetController],
      providers: [ExternalAssetService],
    }).compile();

    controller = module.get<ExternalAssetController>(ExternalAssetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
