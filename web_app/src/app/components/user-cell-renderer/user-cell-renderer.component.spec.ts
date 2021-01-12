import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCellRendererComponent } from './user-cell-renderer.component';

describe('UserCellRendererComponent', () => {
  let component: UserCellRendererComponent;
  let fixture: ComponentFixture<UserCellRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCellRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
