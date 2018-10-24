import { BaseComponentOptions } from './../component/base.component';
import { Component, OnInit, Input } from '@angular/core';
export interface FormComponentOptions extends BaseComponentOptions {
  stateName: string
}
@Component({
  selector: 'vinci-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input("options")
  public Options: FormComponentOptions
  constructor() { }

  ngOnInit() {
  }

}
