import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public Confirmed() {
    console.log('confirmed');
  }
  public Canceled() {
    console.log('canceled');
  }
}
