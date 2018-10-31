import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-panel-item-content',
  templateUrl: './panel-item-content.component.html',
  styleUrls: ['./panel-item-content.component.css']
})
export class PanelItemContentComponent implements OnInit, AfterViewInit, AfterContentInit {
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  constructor() { }

  ngOnInit() {
  }

}
