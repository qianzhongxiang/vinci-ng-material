import { Component, OnInit, EventEmitter, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
export enum NoticeDialogType {
  info,
  warnning,
  error
}
export interface NoticeDialogData {
  title?: string;
  content?: string;
  type?: NoticeDialogType;
}
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'vinci-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {
  @Input()
  public Content: string;
  @Input()
  public Title: string;
  @Input()
  public Type: NoticeDialogType;

  public CssClassMap = ['info', 'warnning', 'error'];
  public Closed: EventEmitter<any> = new EventEmitter<any>();
  constructor(public dialogRef: MatDialogRef<NoticeComponent>, @Inject(MAT_DIALOG_DATA) data: NoticeDialogData) {
    if (data) {
      this.Title = data.title;
      this.Content = data.content;
      this.Type = data.type;
    }
  }

  ngOnInit() {
  }

}
