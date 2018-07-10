import { MultiPanelsItemComponent } from './multi-panels-item/multi-panels-item.component';
import { Component, OnInit, Input, ContentChildren, QueryList, AfterContentInit } from '@angular/core';

@Component({
    selector: 'vinci-multi-panels',
    templateUrl: './multi-panels.component.html',
    styleUrls: ['./multi-panels.component.css']
})

export class MultiPanelsComponent implements OnInit, AfterContentInit {
    @Input("width")
    public width: string = "260px"
    ngAfterContentInit(): void {
        if (!Number.isNaN(this.SelectedIndex)) {
            this.Select(this.panels.toArray()[this.SelectedIndex]);
        }
        // this.Items = this.panels.map(p => { return { iconClass: p.iconClass, title: p.title, code: p.code } })
    }
    // Items: Array<ICate>
    @ContentChildren(MultiPanelsItemComponent)
    public panels: QueryList<MultiPanelsItemComponent>
    @Input("selected-index")
    public SelectedIndex: number
    public SelectedItem: MultiPanelsItemComponent
    constructor() {

    }

    ngOnInit() {

    }

    Select(item: MultiPanelsItemComponent) {
        if (this.SelectedItem == item) {
            this.SelectedItem = undefined;
        } else
            this.SelectedItem = item;
        this.SetShow();
    }
    private SetShow() {
        this.panels.forEach(p => p.show = false);
        if (this.SelectedItem) this.SelectedItem.show = true;
    }
}
