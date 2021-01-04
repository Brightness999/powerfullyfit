import { TestBed } from '@angular/core/testing';

import { AuthenticatedUserGuard } from './authenticated-user.guard';

describe('AuthenticatedUserGuard', () => {
  let guard: AuthenticatedUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthenticatedUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
