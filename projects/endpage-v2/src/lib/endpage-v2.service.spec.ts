import { TestBed } from '@angular/core/testing';

import { EndpageV2Service } from './endpage-v2.service';

describe('EndpageV2Service', () => {
  let service: EndpageV2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EndpageV2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
