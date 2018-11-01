import { Injectable } from '@angular/core';
import { ConfirmComponent, ConfirmDialogData } from '../component/layout/dialog/confirm.component';
import { NoticeComponent, NoticeDialogType } from '../component/layout/dialog/notice.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ComponentType } from '@angular/cdk/portal';

export interface DialogOptions {
  width?: string;
  height?: string;
  title?: string;
  maxWidth?: string;
  maxHeight?: string;
}


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }
  /**
   * confirm dialog if content is ComponentType  then confirmed and canceled should not be given.
   * @param content
   * @param confirmed
   * @param canceled
   * @param options
   */
  public Confirm(content: string | ComponentType<ConfirmComponent>, confirmed?: () => void
    , canceled?: () => void, options?: DialogOptions) {
    let ref: MatDialogRef<any>;
    options = options || {};
    const data: ConfirmDialogData = { title: options.title };
    let com: ComponentType<any>;
    if (typeof content === 'string') {
      data.content = content;
      com = ConfirmComponent;
    } else {
      com = content;
    }
    ref = this.dialog.open(com, {
      data: data, maxHeight: options.maxHeight, maxWidth: options.maxWidth
      , width: options.width, height: options.height, disableClose: true
    });
    if (ref.componentInstance instanceof ConfirmComponent) {
      if (confirmed) {
        ref.componentInstance.Confirmed.subscribe(confirmed);
      }
      if (canceled) {
        ref.componentInstance.Canceled.subscribe(canceled);
      }
    }
    return ref;
  }

  public Notice(content: string | ComponentType<NoticeComponent>,
    type: NoticeDialogType = NoticeDialogType.info, options?: DialogOptions,
    closed?: () => void) {
    let ref: MatDialogRef<any>;
    options = options || {};
    const data: ConfirmDialogData = { title: options.title };
    let com: ComponentType<any>;
    if (typeof content === 'string') {
      data.content = content;
      com = NoticeComponent;
    } else {
      com = content;
    }
    ref = this.dialog.open(com, {
      data: data, maxHeight: options.maxHeight, maxWidth: options.maxWidth
      , width: options.width, height: options.height, disableClose: true
    });
    if (ref.componentInstance instanceof NoticeComponent) {
      if (closed) {
        (ref.componentInstance as NoticeComponent).Closed.subscribe(closed);
      }
    }
    return ref;
  }

  public Dialog(content: ComponentType<any>, options?: DialogOptions, closed?: () => void) {

  }

  public Window(url: string, options?: DialogOptions, closed?: () => void) {

  }
}
