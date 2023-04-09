/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HysComponent } from './hys.component';

describe('hysComponent', () => {
  let component: HysComponent;
  let fixture: ComponentFixture<HysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
