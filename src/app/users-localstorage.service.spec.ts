/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UsersLocalstorageService } from './users-localstorage.service';

describe('Service: UsersLocalstorage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersLocalstorageService]
    });
  });

  it('should ...', inject([UsersLocalstorageService], (service: UsersLocalstorageService) => {
    expect(service).toBeTruthy();
  }));
});
