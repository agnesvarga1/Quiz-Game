import { TestBed } from '@angular/core/testing';

import { QiuzService } from './qiuz.service';

describe('QiuzService', () => {
  let service: QiuzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QiuzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
