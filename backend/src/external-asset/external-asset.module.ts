import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { ExternalAsset } from './entities/external-asset.entity';

import { ExternalAssetService } from './external-asset.service';
import { ExternalAssetController } from './external-asset.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ExternalAsset])],
  controllers: [ExternalAssetController],
  providers: [ExternalAssetService],
})
export class ExternalAssetModule {}
