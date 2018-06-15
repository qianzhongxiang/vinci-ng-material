import { TestBed, inject } from '@angular/core/testing';

import { VinciNgMaterialService } from './vinci-ng-material.service';

describe('VinciNgMaterialService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VinciNgMaterialService]
    });
  });

  it('should be created', inject([VinciNgMaterialService], (service: VinciNgMaterialService) => {
    expect(service).toBeTruthy();
  }));
});
