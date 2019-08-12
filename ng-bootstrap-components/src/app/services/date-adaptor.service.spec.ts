import { TestBed } from '@angular/core/testing';

import { DateAdaptorService } from './date-adaptor.service';

describe('DateAdaptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DateAdaptorService = TestBed.get(DateAdaptorService);
    expect(service).toBeTruthy();
  });
});
