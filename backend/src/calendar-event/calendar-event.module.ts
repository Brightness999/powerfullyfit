import { Module } from '@nestjs/common';
import { CalendarEventService } from './calendar-event.service';
import { CalendarEventController } from './calendar-event.controller';

@Module({
  controllers: [CalendarEventController],
  providers: [CalendarEventService]
})
export class CalendarEventModule {}
