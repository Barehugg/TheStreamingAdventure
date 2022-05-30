import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap1Page2Page } from './chap1-page2.page';

describe('Chap1Page2Page', () => {
  let component: Chap1Page2Page;
  let fixture: ComponentFixture<Chap1Page2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chap1Page2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chap1Page2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
