import {
  Injectable,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Program } from './entities/program.entity';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';

@Injectable()
export class ProgramService {
  constructor(
    @InjectRepository(Program)
    private readonly programRepository: Repository<Program>,
  ) {}

  create(createProgramDto: CreateProgramDto) {
    const program = this.programRepository.create(createProgramDto);

    return this.programRepository.save(program);
  }

  findAll() {
    return this.programRepository.find({
      relations: ['coach'],
      order: {
        id: 'DESC',
      },
    });
  }

  async findOne(id: number) {
    const program = await this.programRepository.findOne(id, {
      relations: ['coach'],
    });

    if (!program)
      throw new NotFoundException(`program with id: ${id} was not Found`);

    return program;
  }

  update(id: number, updateProgramDto: UpdateProgramDto) {
    return `This action updates a #${id} program`;
  }

  async remove(id: number) {
    const program: any = await this.findOne(id);

    return this.programRepository.remove(program);
  }
}
