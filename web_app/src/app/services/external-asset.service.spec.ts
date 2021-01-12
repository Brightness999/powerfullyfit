import { TestBed } from '@angular/core/testing';

import { ExternalAssetService } from './external-asset.service';

describe('ExternalAssetService', () => {
  let service: ExternalAssetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExternalAssetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
