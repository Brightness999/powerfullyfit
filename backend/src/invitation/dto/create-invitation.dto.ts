import { IsString, IsInt, IsEmail, ValidateNested, IsDefined } from 'class-validator';

export class CreateInvitationDto {
  @IsEmail()
  email: string;

  @IsString()
  firstname: string;

  @IsString()
  lastname: string;
}
