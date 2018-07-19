import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowComponent } from './window.component';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

describe('WindowComponent', () => {
  let component: WindowComponent;
  let fixture: ComponentFixture<WindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WindowComponent],
      imports: [
        CommonModule,
        MatDialogModule,
        MatButtonModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
