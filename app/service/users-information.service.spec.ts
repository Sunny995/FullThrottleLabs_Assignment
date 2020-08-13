import { TestBed } from '@angular/core/testing';

import { UsersInformationService } from './users-information.service';

describe('UsersInformationService', () => {
  let service: UsersInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
