/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OptionsLocalstorageService } from './OptionsLocalstorage.service';

describe('Service: OptionsLocalstorage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OptionsLocalstorageService]
    });
  });

  it('should ...', inject([OptionsLocalstorageService], (service: OptionsLocalstorageService) => {
    expect(service).toBeTruthy();
  }));
});
