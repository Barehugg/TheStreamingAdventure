import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap3Page2Page } from './chap3-page2.page';

describe('Chap3Page2Page', () => {
  let component: Chap3Page2Page;
  let fixture: ComponentFixture<Chap3Page2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap3Page2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap3Page2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
