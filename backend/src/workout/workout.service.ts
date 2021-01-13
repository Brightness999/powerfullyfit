import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Workout } from './entities/workout.entity';

import { CreateWorkoutDto } from './dto/create-workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';

@Injectable()
export class WorkoutService {
  constructor(
    @InjectRepository(Workout)
    private readonly workoutRepository: Repository<Workout>,
  ) {}

  create(createWorkoutDto: CreateWorkoutDto) {
    const workout = this.workoutRepository.create(createWorkoutDto);

    return this.workoutRepository.save(workout);
  }

  findAll() {
    return this.workoutRepository.find({
      relations: ['coach', 'coach.logo'],
      order: {
        id: 'DESC',
      },
    });
  }

  async findOne(id: number) {
    const workout = await this.workoutRepository.findOne(id, {
      relations: ['coach'],
    });

    if (!workout)
      throw new NotFoundException(`workout with id: ${id} was not Found`);

    return workout;
  }

  update(id: number, updateWorkoutDto: UpdateWorkoutDto) {
    return `This action updates a #${id} workout`;
  }

  async remove(id: number) {
    const workout: any = await this.findOne(id);

    return this.workoutRepository.remove(workout);
  }
}
