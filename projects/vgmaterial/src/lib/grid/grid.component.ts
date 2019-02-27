import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { LayoutService, Row } from '../service/layout.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'vgm-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input()
  public templateRef: TemplateRef<any>;
  @Input()
  public layoutId: string;
  // public data = [
  //   {
  //     id: 'r1',
  //     children: [
  //       {
  //         id: 'r1c1'
  //       },
  //       {
  //         id: 'r1c2'
  //       }
  //     ]
  //   },
  //   {
  //     id: 'r2',
  //     children: [
  //       {
  //         id: 'r2c1',
  //         col: 10
  //       },
  //       {
  //         id: 'r2c2',
  //         col: 2
  //       }
  //     ]
  //   }
  // ];
  public data: Observable<Row[]>;
  constructor(private layoutService: LayoutService) { }


  ngOnInit() {
    this.data = this.layoutService.GetPipe(this.layoutId);
  }

}
