import { TableComponent } from 'projects/vinci-ng-material/src';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  tableDataSource = [{ code: "code1", name: 'name1' }, { code: "code2", name: 'name2' }]
  columns = [{ field: "code", title: "code", code: "code" }, { field: "name", title: "name", code: "name" }]
  displayedColumns = ['code', 'name']

  @ViewChild(TableComponent)
  private table: TableComponent
  public RemoveItems() {
    this.table.RemoveSelected();
  }
  public UpdateItems() {
    this.tableDataSource = [{ code: "code3", name: 'name3' }, { code: "code3", name: 'name3' }]
  }
  public DblClick(e) {
    console.log(e);
  }
}
