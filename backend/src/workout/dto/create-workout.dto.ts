import { IsString, IsInt } from 'class-validator';

export class CreateWorkoutDto {
  @IsString()
  name: string;

  @IsString()
  type: string;
}
