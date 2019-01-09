import { TestBed, inject } from '@angular/core/testing';

import { StyleApplierService } from './style-applier.service';

describe('StyleApplierService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StyleApplierService]
    });
  });

  it('should be created', inject([StyleApplierService], (service: StyleApplierService) => {
    expect(service).toBeTruthy();
  }));
});
