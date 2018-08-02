import { MultiPanelsItemComponent } from './multi-panels-item/multi-panels-item.component';
import { Component, OnInit, Input, ContentChildren, QueryList, AfterContentInit, NgModule, ChangeDetectorRef, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'vinci-multi-panels',
    templateUrl: './multi-panels.component.html',
    styleUrls: ['./multi-panels.component.css']
})

export class MultiPanelsComponent implements OnInit, AfterContentInit {
    @Input("width")
    public width: string = "260px"
    ngAfterContentInit(): void {
        // this.Items = this.panels.map(p => { return { iconClass: p.iconClass, title: p.title, code: p.code } })
    }
    // Items: Array<ICate>
    @ContentChildren(MultiPanelsItemComponent)
    public panels: QueryList<MultiPanelsItemComponent>
    @Input("selected-index")
    public SelectedIndex: number
    // public set SelectedIndex(value: number) {
    //     if (!Number.isNaN(this.SelectedIndex)) {
    //         this.panels.toArray().indexOf()
    //         this.Select(this.panels.toArray()[this.SelectedIndex]);
    //     } else {
    //         this.Select(undefined);
    //     }
    // }
    // public SelectedItem: MultiPanelsItemComponent
    constructor(private ChangeDetectorRef: ChangeDetectorRef) {

    }

    ngOnInit() {

    }
    Select(index: number) {
        setTimeout(() => {
            if (this.SelectedIndex === index) {
                this.SelectedIndex = undefined;
            } else
                this.SelectedIndex = index;
            this.SetShow();
        }, 100);
    }
    // Select(item: MultiPanelsItemComponent) {
    //     if (this.SelectedItem == item) {
    //         this.SelectedItem = undefined;
    //     } else
    //         this.SelectedItem = item;
    //     this.SetShow();
    // }
    private SetShow() {
        this.panels.forEach(p => p.Show = false);
        if (!isNaN(this.SelectedIndex)) this.panels.toArray()[this.SelectedIndex].Show = true;
    }
    public IsShow() {
        !isNaN(this.SelectedIndex)
    }
}