import { Injectable } from '@angular/core';
import { ConfirmComponent, ConfirmDialogData } from '../component/layout/dialog/confirm.component';
import { NoticeComponent } from '../component/layout/dialog/notice.component';
import { Component } from '@angular/compiler/src/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ComponentType } from '@angular/cdk/portal';

export interface DialogOptions {
  width?: string;
  height?: string;
  title?: string;
  maxWidth?: string;
  maxHeight?: string;
}
export enum NoticeDialogType {
  error,
  warnning,
  info
}

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }
  /**
   * confirm dialog
   * @param content
   * @param confirmed
   * @param canceled
   * @param options
   */
  public Confirm(content: string | ComponentType<ConfirmComponent>, confirmed: () => void, canceled?: () => void, options?: DialogOptions) {
    let ref: MatDialogRef<any>;
    options = options || {};
    const data: ConfirmDialogData = { title: options.title };
    if (typeof content === 'string') {
      data.content = content;
      ref = this.dialog.open(ConfirmComponent, {
        data: data, maxHeight: options.maxHeight, maxWidth: options.maxWidth
        , width: options.width, height: options.height
      });
      ref.componentInstance.Confirmed.subscribe(confirmed);
      ref.componentInstance.Canceled.subscribe(canceled);
    } else {
      ref = this.dialog.open(content, {
        data: data, maxHeight: options.maxHeight, maxWidth: options.maxWidth
        , width: options.width, height: options.height
      });
      ref.componentInstance.Confirmed.subscribe(confirmed);
      ref.componentInstance.Canceled.subscribe(canceled);
    }
    return ref;
  }

  public Notice(content: string | NoticeComponent, type: NoticeDialogType = NoticeDialogType.info, options?: DialogOptions,
    closed?: () => void) {
    let ref: MatDialogRef<any>;
    if (typeof content === 'string') {
      const data: ConfirmDialogData = { title: options ? options.title : '', content: content };
      ref = this.dialog.open(ConfirmComponent, { data: data });
    } else {

    }
  }

  public Dialog(content: Component, options?: DialogOptions, closed?: () => void) {

  }

  public Window(url: string, options?: DialogOptions, closed?: () => void) {

  }
}
