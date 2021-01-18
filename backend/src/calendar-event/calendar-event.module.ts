import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { Activity } from './entities/activity.entity'
import { CalendarEvent } from './entities/calendar-event.entity'

import { CalendarEventService } from './calendar-event.service';
import { CalendarEventController } from './calendar-event.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Activity, CalendarEvent])],
  controllers: [CalendarEventController],
  providers: [CalendarEventService],
})
export class CalendarEventModule {}
