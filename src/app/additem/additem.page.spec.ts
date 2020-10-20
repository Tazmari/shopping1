import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditemPage } from './additem.page';

describe('AdditemPage', () => {
  let component: AdditemPage;
  let fixture: ComponentFixture<AdditemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
