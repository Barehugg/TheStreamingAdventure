import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap4Page2Page } from './chap4-page2.page';

describe('Chap4Page2Page', () => {
  let component: Chap4Page2Page;
  let fixture: ComponentFixture<Chap4Page2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap4Page2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap4Page2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
