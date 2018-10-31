import { Component, OnInit, Input, HostBinding, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'vinci-multi-panels-item',
  templateUrl: './multi-panels-item.component.html',
  styleUrls: ['./multi-panels-item.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiPanelsItemComponent implements OnInit, AfterViewInit {
  @Input('code')
  public code: string;
  @Input('title')
  public title: string;
  @Input('iconClass')
  public iconClass: string;
  @HostBinding('class.show')
  public Show: boolean;

  ngAfterViewInit(): void {
    // test  AfterViewInit
    console.log('ngAfterViewInit');

    // this.changedetection.detectChanges()
  }


  constructor() { }

  ngOnInit() {
  }

}
