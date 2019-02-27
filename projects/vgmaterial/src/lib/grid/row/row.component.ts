import { Component, OnInit, TemplateRef, Input } from '@angular/core';

@Component({
  selector: 'vgm-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {
  @Input()
  public data;
  @Input()
  public templateRef: TemplateRef<any>;
  constructor() { }

  ngOnInit() {
  }

}
