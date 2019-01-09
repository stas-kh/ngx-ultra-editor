import { TestBed, inject } from '@angular/core/testing';

import { TextReceiverService } from './text-receiver.service';

describe('TextReceiverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TextReceiverService]
    });
  });

  it('should be created', inject([TextReceiverService], (service: TextReceiverService) => {
    expect(service).toBeTruthy();
  }));
});
