import { MultiPanelsModule } from './../../projects/vinci-ng-material/src/lib/pulgin/multi-panels/multi-panels.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableModule } from 'projects/vinci-ng-material/src/lib/component/dataTable/table/table.module';
import { PanelItemContentComponent } from './panel-item-content/panel-item-content.component';
import { DialogModule } from 'projects/vinci-ng-material/src';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelItemContentComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MultiPanelsModule,
    TableModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDialogComponent]
})
export class AppModule { }
