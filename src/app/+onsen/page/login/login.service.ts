import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { User } from './user';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class LoginService {
    private userUrl = 'app/users';
    private header = new Headers({ 'Content-Type':'application/json'});

    constructor(private http:Http){}

    userLogin(): Observable<User>{
        return this.http.get(this.userUrl)
                        .map(res => res.json().data as User)
                        .catch(this.handleError)
    }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        // console.error(errMsg);
        return Observable.throw(errMsg);
    }
}