import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutBuildderComponent } from './workout-buildder.component';

describe('WorkoutBuildderComponent', () => {
  let component: WorkoutBuildderComponent;
  let fixture: ComponentFixture<WorkoutBuildderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutBuildderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutBuildderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
