import { Injectable } from '@angular/core';
import { Store, select, createSelector } from '@ngrx/store';
import { LayoutStat } from '../reducer/layer-reducer';
import {
  LayoutSetAction, LayoutRemoveAction, LayoutAddItemAction
  , LayoutRemoveItemAction, LayoutResetItemAction
} from '../actions/layout-actions';
import { Observable } from 'rxjs';

export interface Row {
  id: string;
  children: Cell[];
}

export interface Cell {
  id: string;
  col?: number;
}
const selectLayouts = (state: { layouts: LayoutStat }) => {
  return state.layouts;
};

const selectLayout = createSelector(selectLayouts, (layouts: LayoutStat, id: string) => {
  return layouts[id];
});
@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  constructor(private store: Store<{ layouts: LayoutStat }>) {
  }
  GetPipe(id: string): Observable<Row[]> {
    return this.store.pipe(select(selectLayout, id));
  }
  Set(id: string, structure: Row[]) {
    this.store.dispatch(new LayoutSetAction({ id: id, structure: structure }));
  }

  Remove(id: string) {
    this.store.dispatch(new LayoutRemoveAction({ id: id }));
  }
  AddItem(id: string, data: Row | Cell, parentId?: string) {
    this.store.dispatch(new LayoutAddItemAction({ id: id, parentId: parentId, data: data }));
  }
  RemoveItem(id: string, itemId: string) {
    this.store.dispatch(new LayoutRemoveItemAction({ id: id, itemId: itemId }));
  }
  ResetItem(id: string, itemId: string, data: Row | Cell) {
    this.store.dispatch(new LayoutResetItemAction({ id: id, itemId: itemId, data: data }));
  }
}
