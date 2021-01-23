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

import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

import { Coach } from './entities/coach.entity';

import { CurrentUser } from '@app/common/decorators/current-user.decorator';
import { JwtAuthGuard } from '@app/auth/guards/jwt-auth.guard';

import { CoachService } from './coach.service';

import { CreateCoachDto } from './dto/create-coach.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateCoachDto } from './dto/update-coach.dto';

@Controller('coach')
@ApiTags('coach')
@UseGuards(JwtAuthGuard)
export class CoachController {
  constructor(private readonly coachService: CoachService) {}

  @Post('')
  createCoach(@Body() createCoachDto: CreateCoachDto) {
    console.log(createCoachDto);
    return this.coachService.createCoach(createCoachDto);
  }

  @Get('')
  findAllCoaches(@CurrentUser() user: any) {
    return this.coachService.findAllCoaches();
  }

  @Get('clients')
  async findAllClients(@CurrentUser() user: any) {
    let coach: Coach = await this.coachService.findOneCoach(user.id);

    // console.log('coach.controller-findAllClients-coach', coach);

    return this.coachService.findAllClients(coach);
  }

  @Get(':id/clients')
  async findCoachClients(@Param('id', ParseIntPipe) id: number) {
    let coach: Coach = await this.coachService.findOneCoach(id);

    return this.coachService.findAllClientsForCoach(coach);
  }

  @Get(':id')
  findOneCoach(@Param('id', ParseIntPipe) id: number) {
    return this.coachService.findOneCoach(id);
  }

  @Patch(':id')
  updateCoach(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCoachDto: UpdateCoachDto,
  ) {
    return this.coachService.updateCoach(id, updateCoachDto);
  }

  @Delete(':id')
  removeCoach(@Param('id', ParseIntPipe) id: number) {
    return this.coachService.removeCoach(id);
  }
}
