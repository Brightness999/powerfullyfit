import { Injectable, NotFoundException } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Term } from './entities/term.entity';
import { CreateTermDto } from './dto/create-term.dto';
import { UpdateTermDto } from './dto/update-term.dto';


@Injectable()
export class TermService {
  constructor(
    @InjectRepository(Term)
    private readonly termRepository: Repository<Term>,
  ) {}

  createTerm(createTermDto: CreateTermDto) {
    const term = this.termRepository.create(createTermDto);

    return this.termRepository.save(term);
  }

  updateTerm(id: number, updateTermDto: UpdateTermDto) {
    return this.termRepository.update({id: id}, updateTermDto);
  }

  getTerm(id: number) {
    return this.termRepository.findOne({where: {coach: id}});
  }
}
