import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoplistPage } from './shoplist.page';

describe('ShoplistPage', () => {
  let component: ShoplistPage;
  let fixture: ComponentFixture<ShoplistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoplistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoplistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
