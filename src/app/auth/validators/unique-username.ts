import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root'})

export class UniqueUsername {
    constructor(private http: HttpClient){}

    validate: AsyncValidatorFn = (control: AbstractControl): Observable<ValidationErrors | null> => {
        const { value } = control;
        return this.http.post<any>('TODO: URL', { data: value })
    };
}
