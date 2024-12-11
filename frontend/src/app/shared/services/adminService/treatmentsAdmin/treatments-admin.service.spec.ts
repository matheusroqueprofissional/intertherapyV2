import { TestBed } from '@angular/core/testing';

import { TreatmentsAdminService } from './treatments-admin.service';

describe('TreatmentsAdminService', () => {
  let service: TreatmentsAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreatmentsAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
