import { Injectable } from '@nestjs/common';
import { CreateCalendarEventDto } from './dto/create-calendar-event.dto';
import { UpdateCalendarEventDto } from './dto/update-calendar-event.dto';

@Injectable()
export class CalendarEventService {
  create(createCalendarEventDto: CreateCalendarEventDto) {
    return 'This action adds a new calendarEvent';
  }

  findAll() {
    return `This action returns all calendarEvent`;
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
