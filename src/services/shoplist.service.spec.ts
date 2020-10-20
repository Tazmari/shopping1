import { TestBed } from '@angular/core/testing';

import { ShoplistService } from './shoplist.service';

describe('ShoplistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShoplistService = TestBed.get(ShoplistService);
    expect(service).toBeTruthy();
  });
});
