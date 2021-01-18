import { ApiProperty } from '@nestjs/swagger';

import { IsString, IsDate } from 'class-validator';

export class CreateCalendarEventDto {
  @ApiProperty()
  @IsDate()
  start: Date;

  @ApiProperty()
  @IsDate()
  end: Date;
}
