/**
 * Created by Ollie on 10/05/2017.
 */

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Graph } from './graph';

@Injectable()

export class CqmService {
    private cqmListUrl = 'https://ollies.cloud/status/cqm/';

    constructor(private http: Http) {
    }


    getList(): Promise<String[]> {
        return this.http.get(this.cqmListUrl)
            .toPromise()
            .then(response => response.json() as String[])
            .catch(this.handleError);
    }

    getGraph(circuit: string): Promise<Graph> {
        const url = `${this.cqmListUrl}/${circuit}.png`;
        const data = `${this.cqmListUrl}/${circuit}.json`;

        return this.http.get(data)
            .toPromise()
            .then(response => {
                let graph = response.json().graph as Graph;
                graph.addr = url;
                return graph;
            })
            .catch(this.handleError);
    }

    handleError(error: any) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
