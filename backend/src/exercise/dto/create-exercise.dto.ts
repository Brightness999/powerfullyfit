import { IsString, IsInt, ValidateNested, IsDefined } from 'class-validator';

import { Type } from 'class-transformer';

import { CreateExternalAssetDto } from '@app/external-asset/dto/create-external-asset.dto';
import { ExternalAsset } from '@app/external-asset/entities/external-asset.entity';

export class CreateExerciseDto {
  @IsString()
  name: string;

  @IsString()
  type: string;

  @IsString()
  description: string;

  @IsDefined()
  @Type(() => ExternalAsset)
  logo: ExternalAsset;
}
