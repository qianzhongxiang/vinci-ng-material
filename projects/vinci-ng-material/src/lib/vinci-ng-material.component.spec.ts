import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinciNgMaterialComponent } from './vinci-ng-material.component';

describe('VinciNgMaterialComponent', () => {
  let component: VinciNgMaterialComponent;
  let fixture: ComponentFixture<VinciNgMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinciNgMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinciNgMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
