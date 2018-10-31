import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelItemContentComponent } from './panel-item-content.component';

describe('PanelItemContentComponent', () => {
  let component: PanelItemContentComponent;
  let fixture: ComponentFixture<PanelItemContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelItemContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelItemContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
