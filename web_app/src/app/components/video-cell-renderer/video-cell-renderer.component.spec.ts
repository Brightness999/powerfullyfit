import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCellRendererComponent } from './video-cell-renderer.component';

describe('VideoCellRendererComponent', () => {
  let component: VideoCellRendererComponent;
  let fixture: ComponentFixture<VideoCellRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoCellRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
