import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { SideMenu } from './side-menu'

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class SideMenuService {
    private sidemenuUrl = 'app/menus';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    getSidemenu(): Observable<SideMenu[]> {
        return this.http.get(this.sidemenuUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
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