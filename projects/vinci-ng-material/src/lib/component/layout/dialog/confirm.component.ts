import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
export interface ConfirmData {
  content: string
  confirm?: () => void
  cancel?: () => void
}

@Component({
  selector: 'vinci-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmData) {


  }

  ngOnInit() {
  }

}
