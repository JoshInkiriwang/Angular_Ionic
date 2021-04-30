import { TestBed } from '@angular/core/testing';

import { PasienService } from './pasien.service';

describe('PasienService', () => {
  let service: PasienService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasienService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
