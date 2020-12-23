import { PartialType } from '@nestjs/mapped-types';
import { CreateCoachDto } from './create-coach.dto';

export class UpdateCoachDto extends PartialType(CreateCoachDto) {}
