import { IsString } from 'class-validator';

export class CreateProgramDto {
  @IsString()
  name: string;
}
