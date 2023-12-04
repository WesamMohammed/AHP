/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RadButComponent } from './Rad-But.component';

describe('RadButComponent', () => {
  let component: RadButComponent;
  let fixture: ComponentFixture<RadButComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadButComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadButComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
