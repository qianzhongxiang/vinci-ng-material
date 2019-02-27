import { TableComponent } from 'projects/vgmaterial/src';
import { Component, ViewChild } from '@angular/core';
import { DialogService } from 'projects/vgmaterial/src/lib/service/dialog.service';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ComponentType } from '@angular/cdk/portal';
import { NoticeDialogType } from 'projects/vgmaterial/src/lib/component/layout/dialog/notice.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  tableDataSource = [{ code: 'code1', name: 'name1' }, { code: 'code2', name: 'name2' }];
  columns = [{ field: 'code', title: 'code', code: 'code' }, { field: 'name', title: 'name', code: 'name' }];
  displayedColumns = ['code', 'name'];

  @ViewChild(TableComponent)
  private table: TableComponent;

  public constructor(private dialogService: DialogService) {

  }
  public RemoveItems() {
    this.table.RemoveSelected();
  }
  public UpdateItems() {
    this.tableDataSource = [{ code: 'code3', name: 'name3' }, { code: 'code3', name: 'name3' }];
  }
  public DblClick(e) {
    console.log(e);
  }

  public OpenConfirmDialog() {
    this.dialogService.Confirm('confirm dialog showed', () => {
      console.log('confirmed');
    }, () => {
      console.log('canceled');
    }, { title: 'title', width: '200px', height: '200px' });
  }
  public OpenCustomConfirmDialog() {
    this.dialogService.Confirm(ConfirmDialogComponent as ComponentType<any>);
  }
  public OpenNoticeDialog() {
    this.dialogService.Notice('notice dialog should be showen', NoticeDialogType.warnning, { title: 'notice dialog' }
      , () => {
        console.log('closed');
      });
  }

  public OpenWindowDialog() {
    this.dialogService.Window('http://www.baidu.com', { title: 'window title', width: '500px', height: '300px' }, () => {
      console.log('closed');
    });
  }
}
