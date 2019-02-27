# VinciNgMaterial

`@import "~@angular/material/prebuilt-themes/indigo-pink.css"; in style.css`
## multi-panels
```
import MultiPanelsModule in your module;

request "front awesome"; "bootstrap";
```
### Expample
```html
<vinci-multi-panels [width]="'370px'">
  <vinci-multi-panels-item [iconClass]="'fa fa-home'" [code]="'home'" [title]="'home_title'" [class]="'home'">
    <h1>HOME</h1>
  </vinci-multi-panels-item>
  <vinci-multi-panels-item [iconClass]="'fa fa-info'" [code]="'info'" [title]="'info_title'" [class]="'info'">
    <h1>{{title}}</h1>
  </vinci-multi-panels-item>
</vinci-multi-panels>
```

## Table

`import { TableModule } from vinci-ng-material'; `
``` ts
  tableDataSource = [{ code: "code1", name: 'name1' }, { code: "code2", name: 'name2' }]
  columns = [{ field: "code", title: "code", code: "code" }, { field: "name", title: "name", code: "name" }]
  displayedColumns = ['code', 'name']
```
### columnItem
``` ts
export interface ColumnItemBtn {
  title: string;
  class?: string;
  click: (item: any) => void;
}
export interface ColumnItem {
  field: string;
  title: string;
  template: (item, field: string) => string;
  sticky?: boolean;
  cssClassFriendlyName?: string;
  buttons?: ColumnItemBtn[];
}
```
### remove items which have been selected
``` ts
  @ViewChild(TableComponent)
  private table: TableComponent
  public RemoveItems() {
    this.table.RemoveSelected();
  }
```
``` html
<vinci-table style="width: 100%;" [dataSource]="tableDataSource" [columns]="columns" [displayedColumns]="displayedColumns"
  [checkable]="true" [pageable]="false" (rowDblclick)="click(item);">
</vinci-table>
```


##ComfirmDialog
``` ts
 this.dialogService.Confirm('confirm dialog showed', () => {
      console.log('confirmed');
    }, () => {
      console.log('canceled');
    }, { title: 'title'});
```
or
``` html
<vinci-confirm (Confirmed)="Confirmed();" (Canceled)="Canceled();" Title="Custom Title">
  <a href="https://www.baiud.com/"> I am custom content by vinci-confirm element</a>
</vinci-confirm>
```
``` ts
  this.dialogService.Confirm(ConfirmDialogComponent as ComponentType<any>);
```

##Notice dialog
``` ts
this.dialogService.Notice('notice dialog should be showen', NoticeDialogType.warnning, { title: 'notice dialog' }
      , () => {
        console.log('closed');
      });
```
or using html
略

## iframe window dialog
``` ts
this.dialogService.Window('http://www.baidu.com', { title: 'window title', width: '500px', height: '300px' }, () => {
      console.log('closed');
    });
```