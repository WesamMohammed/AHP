/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UsingIndicatorsComponent } from './using-indicators.component';

describe('UsingIndicatorsComponent', () => {
  let component: UsingIndicatorsComponent;
  let fixture: ComponentFixture<UsingIndicatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingIndicatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingIndicatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
