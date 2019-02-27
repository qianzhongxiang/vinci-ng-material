import { Component, OnInit, Input, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTable, MatTableDataSource } from '@angular/material/table';
const initialSelection = [];
const allowMultiSelect = true;
export interface ColumnItemBtn {
  title: string;
  class?: string;
  click: (item: any) => void;
}
export interface ColumnItem {
  code: string;
  field: string;
  title: string;
  template?: (item, field: string) => string;
  sticky?: boolean;
  cssClassFriendlyName?: string;
  buttons?: ColumnItemBtn[];
}
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'vinci-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit {
  public preFilterValue: string;
  // tslint:disable-next-line:no-input-rename
  @Input('pageable')
  public Pageable: boolean;
  // tslint:disable-next-line:no-input-rename
  @Input('columns')
  public Columns: ColumnItem[];
  @Input()
  public FilterBox: boolean;
  // tslint:disable-next-line:no-input-rename
  @Input('checkable')
  public Checkable: boolean;

  public Selection = new SelectionModel<any>(allowMultiSelect, initialSelection);
  private _dataSource: MatTableDataSource<any>;
  @ViewChild(MatTable)
  private table: MatTable<any>;
  // tslint:disable-next-line:no-input-rename
  @Input('header-sticky')
  public HeaderSticky = true;
  // tslint:disable-next-line:no-input-rename
  @Input('displayedColumns')
  public DisplayedColumns: string[];
  // tslint:disable-next-line:no-output-rename
  @Output('rowDblclick')// 双击事件
  public RowDblclick = new EventEmitter();
  // tslint:disable-next-line:no-input-rename
  @Input('row-css-class') // 行样式
  public RowCssClass: (item) => Object;
  ngAfterViewInit(): void {
  }
  public get DataSource(): MatTableDataSource<any> { return this._dataSource; }
  @Input('dataSource')
  public set Datasource(dataSource: any[]) {
    this._dataSource = new MatTableDataSource(dataSource);
  }
  // public DataSource: any[]

  constructor() { }
  /** Whether the number of selected elements matches the total number of rows. */
  IsAllSelected() {
    const numSelected = this.Selection.selected.length;
    const numRows = this.DataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear Selection. */
  MasterToggle() {
    this.IsAllSelected() ?
      this.Selection.clear() :
      this.DataSource.data.forEach(row => this.Selection.select(row));
  }
  ngOnInit() {
    if (this.Checkable) {
      this.DisplayedColumns.unshift('select');
    }
  }
  /**
   * remove all items which are selected
   */
  public RemoveSelected() {
    this.Selection.selected.forEach(s => {
      this.DataSource.data.splice(this.DataSource.data.indexOf(s), 1);
    });
    this.table.renderRows();

    this.Selection.clear();
  }
  public Refresh() {
    this.table.renderRows();
  }
  public GetColContent(item: any, column: ColumnItem): string {
    if (column.template) { return column.template(item, column.field); }
    return item[column.field];
  }
  public RowDbclick(e: MouseEvent, row: any) {
    this.RowDblclick.emit(row);
  }
  public ApplyFilter(value: string) {
    if (value) {
      this.DataSource.filter = this.preFilterValue = value.trim().toLowerCase();
    }
  }
}
