import { IsString } from 'class-validator';

export abstract class CreateUserDto {
  @IsString()
  firstname: string;

  @IsString()
  lastname: string;
}
