import { TestBed } from '@angular/core/testing';

import { AnnnonceService } from './annnonce.service';

describe('AnnnonceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnnnonceService = TestBed.get(AnnnonceService);
    expect(service).toBeTruthy();
  });
});
