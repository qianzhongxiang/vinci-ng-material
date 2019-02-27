import { MultiPanelsModule } from './../../projects/vgmaterial/src/lib/pulgin/multi-panels/multi-panels.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableModule } from 'projects/vgmaterial/src/lib/component/dataTable/table/table.module';
import { PanelItemContentComponent } from './panel-item-content/panel-item-content.component';
import { DialogModule } from 'projects/vgmaterial/src';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { LayoutComponent } from './layout/layout.component';
import { GridModule } from 'projects/vgmaterial/src/lib/grid/grid.module';
import { Routes, RouterModule } from '@angular/router';
const routers: Routes = [{
  path: 'layout', component: LayoutComponent
}, { path: '', pathMatch: 'full', redirectTo: 'layout' }];
@NgModule({
  declarations: [
    AppComponent,
    PanelItemContentComponent,
    ConfirmDialogComponent,
    LayoutComponent
  ],
  imports: [
    RouterModule.forRoot(routers),
    BrowserAnimationsModule,
    MultiPanelsModule,
    TableModule,
    DialogModule,
    GridModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDialogComponent]
})
export class AppModule { }
