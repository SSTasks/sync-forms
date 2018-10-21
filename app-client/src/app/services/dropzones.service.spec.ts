import { TestBed } from '@angular/core/testing';

import { DropzonesService } from './dropzones.service';

describe('DropzonesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DropzonesService = TestBed.get(DropzonesService);
    expect(service).toBeTruthy();
  });
});
