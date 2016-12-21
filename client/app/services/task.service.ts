import { Injectable } from '@angular/core';
import { Headers, Response, Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TaskService {

    constructor(private http: Http) { }

    getData(){

        return this.http.get('http://localhost:6001/api')
            .map((res:Response) => res.json().data);
    }
}