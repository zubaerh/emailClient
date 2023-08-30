import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AsyncValidator, FormControl } from '@angular/forms';

@Injectable({ providedIn: 'root'})

export class UniqueUsername implements AsyncValidator{
    constructor(private http: HttpClient){}

    validate = (control: FormControl): any => {
        const { value } = control;
       return this.http.post<any>  
    };
}
