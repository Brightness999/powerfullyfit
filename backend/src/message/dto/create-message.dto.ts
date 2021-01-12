import { User } from '@app/user/entities/user.entity';
import { IsString, IsInt, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';


export class CreateMessageDto {
  @IsString()
  text: string;

  // @ValidateNested()
  // @Type(() => User)
  // to: User;

  // @ValidateNested()
  // @Type(() => User)
  // from: User;
}
