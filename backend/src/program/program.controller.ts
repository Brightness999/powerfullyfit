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

import { ProgramService } from './program.service';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';

@ApiTags('program')
@Controller('program')
export class ProgramController {
  constructor(private readonly programService: ProgramService) {}

  @Post()
  create(@Body() createProgramDto: CreateProgramDto) {
    return this.programService.create(createProgramDto);
  }

  @Get()
  findAll() {
    return this.programService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
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
