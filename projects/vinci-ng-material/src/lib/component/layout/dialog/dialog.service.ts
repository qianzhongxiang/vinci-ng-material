import { Injectable, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { ConfirmComponent } from './confirm.component';
import { ComponentType } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(private MatDialog: MatDialog) {

  }
  public Confirm(content: string, confirm: () => void, cancel: () => void) {
    this.MatDialog.open(ConfirmComponent, { data: { content: content, confirm: confirm, cancel: cancel } })
  }
  public open<T, D = any, R = any>(componentOrTemplateRef: ComponentType<T> | TemplateRef<T>, config?: MatDialogConfig<D>): MatDialogRef<T, R> {
    return this.MatDialog.open(componentOrTemplateRef, config);
  }
}
