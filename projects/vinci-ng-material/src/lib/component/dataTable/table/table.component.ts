import { Component, OnInit, Input, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTable, MatTableDataSource } from '@angular/material/table';
const initialSelection = [];
const allowMultiSelect = true;
export interface ColumnItem {
  field: string
  title: string
  template: (item, field: string) => string
  sticky?: boolean
  cssClassFriendlyName?: string
}
@Component({
  selector: 'vinci-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit {
  public Selection = new SelectionModel<any>(allowMultiSelect, initialSelection);
  ngAfterViewInit(): void {
  }
  @Input('pageable')
  public Pageable: boolean
  @Input('columns')
  public Columns: ColumnItem[]
  @Input('checkable')
  public Checkable: boolean
  public get DataSource(): MatTableDataSource<any> { return this._dataSource; }
  @Input('dataSource')
  public set Datasource(dataSource: any[]) {
    this._dataSource = new MatTableDataSource(dataSource);
  }
  private _dataSource: MatTableDataSource<any>
  // public DataSource: any[]

  @ViewChild(MatTable)
  private table: MatTable<any>

  @Input('displayedColumns')
  public DisplayedColumns: string[]
  @Output("dblclick")//双击事件
  public Dblclick = new EventEmitter();
  @Input("row-css-class") //行样式
  public RowCssClass: (item) => string;
  constructor() { }
  /** Whether the number of selected elements matches the total number of rows. */
  IsAllSelected() {
    const numSelected = this.Selection.selected.length;
    const numRows = this.DataSource.data.length;
    return numSelected == numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear Selection. */
  MasterToggle() {
    this.IsAllSelected() ?
      this.Selection.clear() :
      this.DataSource.data.forEach(row => this.Selection.select(row));
  }
  ngOnInit() {
    if (this.Checkable)
      this.DisplayedColumns.unshift('select')
  }
  /**
   * remove all items which are selected
   */
  public RemoveSelected() {
    this.Selection.selected.forEach(s => {
      this.DataSource.data.splice(this.DataSource.data.indexOf(s), 1);
    })
    this.table.renderRows()

    this.Selection.clear()
  }
  public Refresh() {
    this.table.renderRows()
  }
  public GetColContent(item: any, column: ColumnItem): string {
    if (column.template) return column.template(item, column.field);
    return item[column.field]
  }
}
