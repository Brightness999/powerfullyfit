import { User } from '@app/user/entities/user.entity';
import { IsString, IsInt, IsDefined } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateMessageDto {
  @IsString()
  text: string;

  @IsDefined()
  @Type(() => User)
  to: User;

  from: User;
}
