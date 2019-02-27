import { Row, Cell } from '../service/layout.service';
import { Action } from '@ngrx/store';

export enum LayoutActionType {
    Set = 'set',
    Remove = 'remove',
    AddItem = 'additem',
    RemoveItem = 'removeitem',
    ResetItem = 'resetitem'
}

export class LayoutSetAction implements Action {
    readonly type = LayoutActionType.Set;
    constructor(public payload: { id: string, structure: Row[] }) { }
}

export class LayoutRemoveAction implements Action {
    readonly type = LayoutActionType.Remove;
    constructor(public payload: { id: string }) { }
}

export class LayoutAddItemAction implements Action {
    readonly type = LayoutActionType.AddItem;
    constructor(public payload: { id: string, parentId?: string, data: Row | Cell }) { }
}

export class LayoutRemoveItemAction implements Action {
    readonly type = LayoutActionType.RemoveItem;
    constructor(public payload: { id: string, itemId: string }) { }
}

export class LayoutResetItemAction implements Action {
    readonly type = LayoutActionType.ResetItem;
    constructor(public payload: { id: string, itemId: string, data: Row | Cell }) { }
}


export type LayoutUnionAction = LayoutSetAction | LayoutRemoveAction
    | LayoutAddItemAction | LayoutRemoveItemAction | LayoutResetItemAction;
