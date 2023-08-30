import { Injectable } from '@angular/core';
import { Validator, FormGroup, ValidatorFn, AbstractFormGroupDirective, AbstractControl } from '@angular/forms';

@Injectable({ providedIn: 'root'})
export class MatchPassword {

    validate: ValidatorFn = (formGroup: AbstractControl) => {
        const { password, passwordConfirmation } = formGroup.value;
        if( password === passwordConfirmation){
            return null;
        } else {
            return { passwordsDontMatch: true }
        }
    }
}
