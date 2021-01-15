import { Test, TestingModule } from '@nestjs/testing';
import { CalendarEventController } from './calendar-event.controller';
import { CalendarEventService } from './calendar-event.service';

describe('CalendarEventController', () => {
  let controller: CalendarEventController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CalendarEventController],
      providers: [CalendarEventService],
    }).compile();

    controller = module.get<CalendarEventController>(CalendarEventController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
