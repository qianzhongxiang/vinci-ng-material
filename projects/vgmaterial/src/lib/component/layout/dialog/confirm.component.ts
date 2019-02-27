import { Component, OnInit, Inject, EventEmitter, Output, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface ConfirmDialogData {
  title?: string;
  content?: string;
  data?: any;
  noCloseAfterClickConfirm?: boolean;
  // confirmed?: Function;
  // cancel?: Function;
}
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'vinci-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  @Output()
  public Confirmed: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  public Canceled: EventEmitter<any> = new EventEmitter<any>();
  @Input()
  public Title: string;
  @Input()
  public Content: string;
  public NoCloseAfterClickConfirm;
  constructor(public dialogRef: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) data: ConfirmDialogData) {
    if (data) {
      this.Title = data.title;
      this.Content = data.content;
      this.NoCloseAfterClickConfirm = data.noCloseAfterClickConfirm;
    }
  }

  ngOnInit() {
  }

  public Confirm() {
    this.Confirmed.emit();
    if (!this.NoCloseAfterClickConfirm) { this.dialogRef.close(); }
  }
}
