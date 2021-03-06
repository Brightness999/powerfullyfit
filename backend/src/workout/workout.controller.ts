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

import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from '@app/auth/guards/local-auth.guard';
import { JwtAuthGuard } from '@app/auth/guards/jwt-auth.guard';

import { ApiTags } from '@nestjs/swagger';

import { CurrentUser } from '@app/common/decorators/current-user.decorator';

import { WorkoutService } from './workout.service';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';

@ApiTags('workout')
@Controller('workout')
@UseGuards(JwtAuthGuard)
export class WorkoutController {
  constructor(private readonly workoutService: WorkoutService) {}

  @Post()
  create(@Body() createWorkoutDto: CreateWorkoutDto, @CurrentUser() user: any) {
    createWorkoutDto['coach'] = user;

    return this.workoutService.create(createWorkoutDto);
  }

  @Get()
  findAll() {
    console.log('user');
    return this.workoutService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number, @CurrentUser() user: any) {
    return this.workoutService.findOne(id);
  }

  @Get('today-workout')
  findTodaysWorkout() {
    return this.workoutService.findOne(1);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateWorkoutDto: any,
    @CurrentUser() user: any,
  ) {
    console.log('Patching Workout');
    console.log(updateWorkoutDto);

    return this.workoutService.update(id, updateWorkoutDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number, @CurrentUser() user: any) {
    return this.workoutService.remove(id);
  }
}
