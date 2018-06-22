import { TestBed, inject } from '@angular/core/testing';

import { MethodGetterService } from './method-getter.service';

describe('MethodGetterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MethodGetterService]
    });
  });

  it('should be created', inject([MethodGetterService], (service: MethodGetterService) => {
    expect(service).toBeTruthy();
  }));
});
