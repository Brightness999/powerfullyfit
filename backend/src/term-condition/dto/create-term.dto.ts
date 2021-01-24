import { IsString, IsDefined } from 'class-validator';
import { Coach } from '@app/user/entities/coach.entity';
import { Type } from 'class-transformer';

export abstract class CreateTermDto {
  @IsString()
  content: string;

  @IsDefined()
  @Type(() => Coach)
  coach: Coach;
}