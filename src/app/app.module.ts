import { MultiPanelsModule } from './../../projects/vinci-ng-material/src/lib/pulgin/multi-panels/multi-panels.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableModule } from 'projects/vinci-ng-material/src/lib/component/dataTable/table/table.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MultiPanelsModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
