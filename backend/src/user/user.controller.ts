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

  @Post('coaches')
  createCoach(@Body() createCoachDto: CreateCoachDto) {
    console.log(createCoachDto);
    return this.userService.createCoach(createCoachDto);
  }

  @Post('clients')
  createClient(@Body() createClientDto: CreateClientDto) {
    console.log(createClientDto);
    return this.userService.createClient(createClientDto);
  }

  @Get('clients')
  findAllClient() {
    return this.userService.findAllClients();
  }

  @Get('coaches')
  findAllCoaches() {
    return this.userService.findAllCoaches();
  }

  @Get('clients/:id')
  findOneClient(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOneClient(id);
  }

  @Get('coaches/:id')
  findOneCoach(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOneCoach(id);
  }

  @Patch('clients/:id')
  updateClient(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateClientDto: UpdateClientDto,
  ) {
    return this.userService.updateClient(id, updateClientDto);
  }

  @Patch('coaches/:id')
  updateCoach(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCoachDto: UpdateCoachDto,
  ) {
    return this.userService.updateCoach(id, updateCoachDto);
  }

  @Delete('coaches/:id')
  removeCoach(@Param('id', ParseIntPipe) id: number) {
    return this.userService.removeCoach(id);
  }

  @Delete('clients/:id')
  removeClient(@Param('id', ParseIntPipe) id: number) {
    return this.userService.removeClient(id);
  }
}
