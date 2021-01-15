import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramCalendarEventComponent } from './program-calendar-event.component';

describe('ProgramCalendarEventComponent', () => {
  let component: ProgramCalendarEventComponent;
  let fixture: ComponentFixture<ProgramCalendarEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramCalendarEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramCalendarEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
