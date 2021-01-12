import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';

import { Exercise } from './entities/exercise.entity';

import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';

@Injectable()
export class ExerciseService {
  constructor(
    @InjectRepository(Exercise)
    private readonly exerciseRepository: Repository<Exercise>,
  ) {}

  create(createExerciseDto: CreateExerciseDto) {
    const exercise = this.exerciseRepository.create(createExerciseDto);

    console.log(exercise);

    return this.exerciseRepository.save(exercise);
  }

  findAll() {
    return this.exerciseRepository.find({
      relations: ['logo'],
    });
  }

  async findOne(id: number) {
    const exercise = await this.exerciseRepository.findOne(id, {
      relations: ['logo'],
    });

    if (!exercise)
      throw new NotFoundException(`Exercise with id: ${id} was not Found`);

    return exercise;
  }

  update(id: number, updateExerciseDto: UpdateExerciseDto) {
    return `This action updates a #${id} exercise`;
  }

  remove(id: number) {
    return `This action removes a #${id} exercise`;
  }
}
