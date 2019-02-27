import { FormControlComponentOptions, FormControlComponent } from './../form.control.component';
import { Component, OnInit, Input } from '@angular/core';

export interface InputOptions extends FormControlComponentOptions {
  placeholder: string,
}

@Component({
  selector: 'vinci-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent extends FormControlComponent implements OnInit {
  constructor() {
    super()
  }

  ngOnInit() {

  }
}
