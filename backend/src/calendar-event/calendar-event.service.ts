import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CalendarEvent } from './entities/calendar-event.entity';

import { CreateCalendarEventDto } from './dto/create-calendar-event.dto';
import { UpdateCalendarEventDto } from './dto/update-calendar-event.dto';

@Injectable()
export class CalendarEventService {
  constructor(
    @InjectRepository(CalendarEvent)
    private readonly calendarEventRepository: Repository<CalendarEvent>,
  ) {}

  create(createCalendarEventDto: CreateCalendarEventDto) {
    const calendarEvent = this.calendarEventRepository.create(createCalendarEventDto);

    return this.calendarEventRepository.save(calendarEvent);
  }

  findAll() {
    return this.calendarEventRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} calendarEvent`;
  }

  update(id: number, updateCalendarEventDto: UpdateCalendarEventDto) {
    return `This action updates a #${id} calendarEvent`;
  }

  remove(id: number) {
    return `This action removes a #${id} calendarEvent`;
  }
}
