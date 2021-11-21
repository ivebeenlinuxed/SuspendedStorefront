import { TestBed } from '@angular/core/testing';

import { CurrentCustomerService } from './current-customer.service';

describe('CurrentCustomerService', () => {
  let service: CurrentCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
