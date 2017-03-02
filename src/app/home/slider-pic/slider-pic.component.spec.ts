/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SliderPicComponent } from './slider-pic.component';

describe('SliderPicComponent', () => {
  let component: SliderPicComponent;
  let fixture: ComponentFixture<SliderPicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderPicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
