import { TestBed } from '@angular/core/testing';

import { RidesProgressService } from './rides-progress.service';

describe('RidesProgressService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RidesProgressService = TestBed.get(RidesProgressService);
    expect(service).toBeTruthy();
  });
});
