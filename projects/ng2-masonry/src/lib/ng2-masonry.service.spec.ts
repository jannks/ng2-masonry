import { TestBed } from '@angular/core/testing';

import { Ng2MasonryService } from './ng2-masonry.service';

describe('Ng2MasonryService', () => {
  let service: Ng2MasonryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ng2MasonryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
