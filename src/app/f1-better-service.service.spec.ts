import { TestBed, inject } from '@angular/core/testing';

import { F1BetterServiceService } from './f1-better-service.service';

describe('F1BetterServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [F1BetterServiceService]
    });
  });

  it('should be created', inject([F1BetterServiceService], (service: F1BetterServiceService) => {
    expect(service).toBeTruthy();
  }));
});
