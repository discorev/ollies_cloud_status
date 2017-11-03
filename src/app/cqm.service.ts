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
    private cqmUrl = 'https://status.ollies.cloud/cqm/';

    constructor(private http: Http) {
    }

    getCircuitsFor(datacentre: string): Promise<String[]> {
        return this.getAll()
            .then(list =>
                // Filter the list of circuits for those ending with this datacentre identifier
                list.filter(circuit => circuit.includes(datacentre))
            )
            .catch(this.handleError);
    }


    private getAll(): Promise<String[]> {
        return this.http.get(this.cqmUrl)
            .toPromise()
            .then(response => response.json() as String[])
            .catch(this.handleError);
    }

    getGraph(circuit: string): Promise<Graph> {
        const url = `${this.cqmUrl}/${circuit}.png`;
        const data = `${this.cqmUrl}/${circuit}.json`;

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
