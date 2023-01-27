import { TestBed } from '@angular/core/testing';

import { HandleerrorService } from './handleerror.service';

describe('HandleerrorService', () => {
  let service: HandleerrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleerrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
