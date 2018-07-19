import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from './confirm.component'

export interface DialogOptions {
  width?: string
  data?: any
  height?: string
}

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule
  ],
  declarations: [DialogComponent, ConfirmComponent],
  exports: [DialogComponent]
})
export class DialogModule {
  constructor() {

  }


}
