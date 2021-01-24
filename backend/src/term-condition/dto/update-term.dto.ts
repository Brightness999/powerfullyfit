import { IsNumber } from 'class-validator';

export abstract class UpdateTermDto {
  @IsNumber()
  id: number;
}
