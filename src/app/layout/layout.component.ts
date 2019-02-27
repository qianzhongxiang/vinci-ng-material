import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'projects/vgmaterial/src/lib/service/layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  public layoutId = 'test';
  constructor(private layoutservice: LayoutService) { }

  ngOnInit() {
    this.layoutservice.Add(this.layoutId, [
      {
        id: 'r1',
        children: [
          {
            id: 'r1c1'
          },
          {
            id: 'r1c2'
          }
        ]
      },
      {
        id: 'r2',
        children: [
          {
            id: 'r2c1',
            col: 10
          },
          {
            id: 'r2c2',
            col: 2
          }
        ]
      }
    ]);
  }
  resetLayout() {
    this.layoutservice.Reset(this.layoutId, [
      {
        id: 'r1',
        children: [
          {
            id: 'r1c1'
          },
          {
            id: 'r1c2'
          }
        ]
      },
      {
        id: 'r2',
        children: [
          {
            id: 'r2c1',
            col: 6
          },
          {
            id: 'r2c2',
            col: 6
          }
        ]
      }
    ]);
  }
  addRow() {
    this.layoutservice.AddItem(this.layoutId, {
      id: 'r3',
      children: [
        {
          id: 'r3c1',
          col: 2
        },
        {
          id: 'r3c2',
          col: 10
        }
      ]
    });
  }
  removeRow() {
    this.layoutservice.RemoveItem(this.layoutId, 'r2c1');
  }
}
