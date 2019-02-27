import { Component, OnInit, EventEmitter, Input, Output, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export interface WindowDialogData {
  url: string;
  title?: string;
  width?: string;
  height?: string;
}
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'vinci-iframe-window',
  templateUrl: './iframe-window.component.html',
  styleUrls: ['./iframe-window.component.css']
})
export class IframeWindowComponent implements OnInit {
  @Input()
  public Url: SafeResourceUrl;
  @Input()
  public Title: string;
  @Input()
  public Width: string;
  @Input()
  public Height: string;
  @Output()
  public Closed: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('iframe', { read: ElementRef })
  private Iframe: ElementRef;
  constructor(public dialogRef: MatDialogRef<IframeWindowComponent>, @Inject(MAT_DIALOG_DATA) data: WindowDialogData
    , private sanitizer: DomSanitizer) {
    if (data) {
      this.Url = sanitizer.bypassSecurityTrustResourceUrl(data.url);
      this.Title = data.title;
      this.Width = data.width;
      this.Height = data.height;
    }
  }

  ngOnInit() {
  }

}
