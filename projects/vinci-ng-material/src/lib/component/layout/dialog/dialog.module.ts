import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog, MatButtonModule } from '@angular/material';
import { ConfirmComponent } from './confirm.component';
import { NoticeComponent } from './notice.component';
import { WindowComponent } from './window.component';
export interface DialogOptions {
  width?: string;
  data?: any;
  height?: string;
}

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  declarations: [DialogComponent, ConfirmComponent, NoticeComponent, WindowComponent],
  exports: [DialogComponent, ConfirmComponent, NoticeComponent],
  entryComponents: [DialogComponent, ConfirmComponent, NoticeComponent]
})
export class DialogModule {
  constructor() {

  }


}
