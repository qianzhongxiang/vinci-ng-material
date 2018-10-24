import { Input } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
export type controlType = 'input' | 'checkbox'

export interface BaseComponentOptions {
    width: string
    disable: boolean
    controlType: controlType
    visable: boolean
    children: BaseComponentOptions[]
    id: string
}

export abstract class BaseComponent {
    @Input("options")
    public Options: BaseComponentOptions
    private children: BaseComponent[] = []
    private parent: BaseComponent

    protected state$: Observable<any>
    // constructor(private store: Store<AppState>) {
    //     this.state$ = store.select(s => s);
    // }

    public Add(com: BaseComponent) {
        com.parent = this;
        this.children.push(com)
    }
    public Remove(com: BaseComponent) {
        let index = this.children.indexOf(com);
        if (index >= 0) {
            com.parent = undefined
            this.children.splice(index, 1);
        }
    }
}
