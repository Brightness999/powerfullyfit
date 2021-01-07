import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramScheduleComponent } from './program-schedule.component';

describe('ProgramScheduleComponent', () => {
  let component: ProgramScheduleComponent;
  let fixture: ComponentFixture<ProgramScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
