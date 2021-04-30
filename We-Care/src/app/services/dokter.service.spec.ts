import { TestBed } from '@angular/core/testing';

import { DokterService } from './dokter.service';

describe('DokterService', () => {
  let service: DokterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DokterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
