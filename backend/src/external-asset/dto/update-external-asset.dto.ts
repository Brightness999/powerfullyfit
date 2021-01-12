import { PartialType } from '@nestjs/mapped-types';
import { CreateExternalAssetDto } from './create-external-asset.dto';

export class UpdateExternalAssetDto extends PartialType(CreateExternalAssetDto) {}
