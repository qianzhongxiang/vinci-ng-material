import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { RowComponent } from './row/row.component';
import { StoreModule, Store } from '@ngrx/store';
import { LayoutReducer } from '../reducer/layer-reducer';
import { LayoutService } from '../service/layout.service';

@NgModule({
  declarations: [GridComponent, RowComponent],
  imports: [
    CommonModule,
    StoreModule.forRoot({ layouts: LayoutReducer })
  ],
  exports: [GridComponent],
  providers: [LayoutService]
})
export class GridModule { }
