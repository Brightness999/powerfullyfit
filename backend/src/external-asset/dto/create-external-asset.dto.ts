import { IsString } from 'class-validator';

export class CreateExternalAssetDto {
  @IsString()
  url: string;

  @IsString()
  type: string;
}
