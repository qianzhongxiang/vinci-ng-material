import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { ConfirmComponent } from './confirm.component';
import { NoticeComponent } from './notice.component';
import { IframeWindowComponent } from './iframe-window.component';
export interface CustomContentDialogBase {
  SubDialogRef;
}
@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  declarations: [ConfirmComponent, NoticeComponent, IframeWindowComponent],
  exports: [ConfirmComponent, NoticeComponent, IframeWindowComponent],
  entryComponents: [ConfirmComponent, NoticeComponent, IframeWindowComponent]
})
export class DialogModule {
  constructor() {

  }


}
