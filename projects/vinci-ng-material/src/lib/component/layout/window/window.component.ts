import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'vinci-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})
export class WindowComponent implements OnInit {
  @Input("title")
  public Title: string
  constructor(private Dialog: MatDialog) { }

  ngOnInit() {
  }
  public Open() {
    // this.Dialog.open(this, {
    //   id: 'filterDialog', width: '80%', position: { top: "20px" }, disableClose: false
    //   , data: { CatesDetailed: this.CatesDetailed, Cates: this.Cates }
    // });
  }
}
