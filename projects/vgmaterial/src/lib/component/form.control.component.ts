import { BaseComponent, BaseComponentOptions } from "./base.component";


export interface FormControlComponentOptions extends BaseComponentOptions {
    stateName: string
    dataType: string
    required: boolean
}

export class FormControlComponent extends BaseComponent {


}
