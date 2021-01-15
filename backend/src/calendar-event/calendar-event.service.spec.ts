import { Test, TestingModule } from '@nestjs/testing';
import { CalendarEventService } from './calendar-event.service';

describe('CalendarEventService', () => {
  let service: CalendarEventService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalendarEventService],
    }).compile();

    service = module.get<CalendarEventService>(CalendarEventService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
