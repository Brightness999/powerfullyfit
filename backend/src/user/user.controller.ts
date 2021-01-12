import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';

import { ApiTags } from '@nestjs/swagger';

import { UserService } from './user.service';
import { CreateClientDto } from './dto/create-client.dto';
import { CreateCoachDto } from './dto/create-coach.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateCoachDto } from './dto/update-coach.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
}
