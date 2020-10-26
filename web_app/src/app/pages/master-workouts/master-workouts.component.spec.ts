import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterWorkoutsComponent } from './master-workouts.component';

describe('MasterWorkoutsComponent', () => {
  let component: MasterWorkoutsComponent;
  let fixture: ComponentFixture<MasterWorkoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterWorkoutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterWorkoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
