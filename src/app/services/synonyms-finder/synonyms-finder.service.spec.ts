import { TestBed, inject } from '@angular/core/testing';

import { SynonymsFinderService } from './synonyms-finder.service';

describe('SynonymsFinderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SynonymsFinderService]
    });
  });

  it('should be created', inject([SynonymsFinderService], (service: SynonymsFinderService) => {
    expect(service).toBeTruthy();
  }));
});
