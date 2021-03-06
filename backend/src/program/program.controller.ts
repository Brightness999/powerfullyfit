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
  UseGuards,
} from '@nestjs/common';

import { CurrentUser } from '@app/common/decorators/current-user.decorator';
import { JwtAuthGuard } from '@app/auth/guards/jwt-auth.guard';

import { ApiTags } from '@nestjs/swagger';

import { ProgramService } from './program.service';

import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';

import { Client } from '@app/user/entities/client.entity';

@ApiTags('program')
@Controller('program')
@UseGuards(JwtAuthGuard)
export class ProgramController {
  constructor(private readonly programService: ProgramService) {}

  @Post()
  create(@Body() createProgramDto: CreateProgramDto, @CurrentUser() user: any) {
    createProgramDto['coach'] = user;

    return this.programService.create(createProgramDto);
  }

  @Post(':id/add-users')
  addUsersToProgram(
    @Param('id', ParseIntPipe) id: number,
    @Body() clients: Client[],
    @CurrentUser() user: any,
  ) {
    // createProgramDto['coach'] = user;

    console.log(clients);

    return this.programService.addUsersToProgram(id, clients);
  }

  @Get()
  findAll(@CurrentUser() user: any) {
    return this.programService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number, @CurrentUser() user: any) {
    return this.programService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProgramDto: UpdateProgramDto,
  ) {
    return this.programService.update(id, updateProgramDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.programService.remove(id);
  }
}
