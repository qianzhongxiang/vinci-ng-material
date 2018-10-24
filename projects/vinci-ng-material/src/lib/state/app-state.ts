import { FormGroupState, createFormGroupState } from 'ngrx-forms'

export interface AppState {
    someOtherField: string;
    myForm: FormGroupState<MyFormValue>;
}

const initialFormState = createFormGroupState<MyFormValue>(FORM_ID, {
    someTextInput: '',
    someCheckbox: false,
    nested: {
        someNumber: 0,
    },
});
const initialState: AppState = {
    someOtherField: '',
    myForm: initialFormState,
};
