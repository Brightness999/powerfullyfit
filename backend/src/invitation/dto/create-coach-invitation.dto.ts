import { CreateInvitationDto } from './create-invitation.dto';

import { Organization } from '@app/organization/entities/organization.entity';

import { IsNotEmpty, IsEnum, IsOptional } from 'class-validator';

export class CreateCoachInvitationDto extends CreateInvitationDto {
  @IsNotEmpty()
  organization: Organization;
}
