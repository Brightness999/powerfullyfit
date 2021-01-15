import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramClientModalComponent } from './program-client-modal.component';

describe('ProgramClientModalComponent', () => {
  let component: ProgramClientModalComponent;
  let fixture: ComponentFixture<ProgramClientModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramClientModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramClientModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
