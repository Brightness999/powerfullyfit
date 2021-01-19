import { CreateInvitationDto } from './create-invitation.dto';

import { Coach } from '@app/user/entities/coach.entity';

import { IsNotEmpty, IsEnum, IsOptional } from 'class-validator';

export class CreateClientInvitationDto extends CreateInvitationDto {
  @IsNotEmpty()
  coach: Coach;
}
