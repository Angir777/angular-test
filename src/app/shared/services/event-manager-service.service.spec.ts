import { TestBed } from '@angular/core/testing';

import { EventManagerServiceService } from './event-manager-service.service';

describe('EventManagerServiceService', () => {
  let service: EventManagerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventManagerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
