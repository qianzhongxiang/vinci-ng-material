import { Row } from '../service/layout.service';
import { LayoutUnionAction, LayoutActionType } from '../actions/layout-actions';

export interface LayoutStat { [id: string]: Row[]; }
const gobalStat: LayoutStat = {};

export function LayoutReducer(stat: LayoutStat = gobalStat, action: LayoutUnionAction) {
    switch (action.type) {
        case LayoutActionType.Set:
            return { ...stat, [action.payload.id]: action.payload.structure };
        case LayoutActionType.Remove:
            delete stat[action.payload.id];
            return stat;
        case LayoutActionType.AddItem:
            let p = stat[action.payload.id];
            if (p) {
                if (action.payload.parentId) {
                    p = p[action.payload.parentId];
                }
                p.push(action.payload.data as any);
            }
            return stat;
        case LayoutActionType.RemoveItem:
            const rarr = stat[action.payload.id];
            if (rarr) {
                for (let index = 0; index < rarr.length; index++) {
                    const element = rarr[index];
                    if (element.id === action.payload.itemId) {
                        rarr.splice(index, 1);
                        break;
                    } else if (element.children) {
                        const sindex = element.children.findIndex(s => s.id === action.payload.itemId);
                        if (sindex >= 0) {
                            element.children.splice(sindex, 1);
                            break;
                        }
                    }
                }
            }
            return stat;
        case LayoutActionType.ResetItem:
            const sarr = stat[action.payload.id];
            if (sarr) {
                for (let index = 0; index < sarr.length; index++) {
                    const element = sarr[index];
                    if (element.id === action.payload.itemId) {
                        sarr[index] = action.payload.data as any;
                        break;
                    } else if (element.children) {
                        const sindex = element.children.findIndex(s => s.id === action.payload.itemId);
                        if (sindex) {
                            element.children[index] = action.payload.data as any;
                            break;
                        }
                    }
                }
            }
            return stat;
        default:
            return stat;
    }
}
