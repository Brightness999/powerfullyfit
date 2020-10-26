import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterProgramsComponent } from './master-programs.component';

describe('MasterProgramsComponent', () => {
  let component: MasterProgramsComponent;
  let fixture: ComponentFixture<MasterProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterProgramsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
