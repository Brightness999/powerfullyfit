import { CreateUserDto } from './create-user.dto';
import { CoachRole } from './../models/coach-role.enum';
import { Organization } from '@app/organization/entities/organization.entity';

import { IsNotEmpty, IsEnum, IsOptional } from 'class-validator';

export class CreateCoachDto extends CreateUserDto {
  @IsNotEmpty()
  @IsEnum(CoachRole)
  role: CoachRole;

  @IsNotEmpty()
  organization: Organization;
}
