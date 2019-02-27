import { Injectable } from '@angular/core';
import { iif } from 'rxjs';
import { Store } from '@ngrx/store';
export enum InputFormControlType {
  text = 1,
  number = 2,
  email = 3,
  pwd = 4,
  phoneNo = 5,

  textarea = 20,
}
export enum ListFormControlType {
  dropDownList = 51,
  radioList = 52,
  checkBoxList = 53
}

const FromControlType = {
  ...ListFormControlType,
  ...InputFormControlType
};

export interface FormControlBase {
  containerId: string;
  id: string;
  name: string;
  type: InputFormControlType | ListFormControlType;
  value: any;
}

export interface InputFormControl extends FormControlBase {
  maxLength?: number;
  reuqired?: boolean;
  placeholder?: string;
}

export interface ListFormControl extends FormControlBase {
  sourceData: any[];
  selectedItems: any[];
}

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private store: Store<{ forms: { [id: string]: FormControlBase[] } }>) {

  }

  SetStructure(id: string, data: FormControlBase[]) {

  }
  RemoveStructure(id: string) {

  }
}
