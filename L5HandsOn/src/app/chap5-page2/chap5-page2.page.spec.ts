import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap5Page2Page } from './chap5-page2.page';

describe('Chap5Page2Page', () => {
  let component: Chap5Page2Page;
  let fixture: ComponentFixture<Chap5Page2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap5Page2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap5Page2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
