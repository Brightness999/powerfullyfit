import { CreateUserDto } from './create-user.dto';
import { Coach } from './../entities/coach.entity';

import { IsNotEmpty, IsEnum, IsOptional } from 'class-validator';

export class CreateClientDto extends CreateUserDto {
  @IsNotEmpty()
  coach: Coach;
}
