import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  firstname: string;

  @IsString()
  lastname: string;

  @IsString()
  email: string;

  @IsString()
  password: string;
}
