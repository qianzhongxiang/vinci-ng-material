# VinciNgMaterial

`@import "~@angular/material/prebuilt-themes/indigo-pink.css"; in style.css`
## multi-panels
```
import MultiPanelsModule in your module;
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
field:string
title:string
code:string
template:(dataItem:any,field:string)=>string

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
  [checkable]="true" [pageable]="false">
</vinci-table>
```
