import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap6Page2Page } from './chap6-page2.page';

describe('Chap6Page2Page', () => {
  let component: Chap6Page2Page;
  let fixture: ComponentFixture<Chap6Page2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap6Page2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap6Page2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
