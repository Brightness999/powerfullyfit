import { IsString, IsInt } from 'class-validator';

export class CreateProgramDto {
  @IsString()
  name: string;

  @IsInt()
  weeks: number;

  @IsInt()
  phases: number;
}
