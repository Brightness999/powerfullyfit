import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { ExternalAsset } from './entities/external-asset.entity';

import { ExternalAssetService } from './external-asset.service';
import { ExternalAssetController } from './external-asset.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './../auth/constants';

@Module({
  imports: [
    TypeOrmModule.forFeature([ExternalAsset]),
    JwtModule.register({
      secret: jwtConstants.secret,
    }),
  ],
  controllers: [ExternalAssetController],
  providers: [ExternalAssetService],
})
export class ExternalAssetModule {}
