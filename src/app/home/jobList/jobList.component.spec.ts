/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewJobComponent } from './new-job.component';

describe('NewJobComponent', () => {
  let component: NewJobComponent;
  let fixture: ComponentFixture<NewJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
