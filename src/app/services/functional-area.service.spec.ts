import { TestBed } from '@angular/core/testing';

import { FunctionalAreaService } from './functional-area.service';

describe('FunctionalAreaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FunctionalAreaService = TestBed.get(FunctionalAreaService);
    expect(service).toBeTruthy();
  });
});
