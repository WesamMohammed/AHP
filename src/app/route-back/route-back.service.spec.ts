/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RouteBackService } from './route-back.service';

describe('Service: RouteBack', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteBackService]
    });
  });

  it('should ...', inject([RouteBackService], (service: RouteBackService) => {
    expect(service).toBeTruthy();
  }));
});
