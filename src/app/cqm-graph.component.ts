/**
 * Created by Ollie on 10/05/2017.
 */

import { Component, Input, OnInit } from '@angular/core';

import { Graph }  from './graph';
import { Record } from './record';
import { CqmService }    from './cqm.service';

@Component({
    selector: 'cqm-graph',
    templateUrl: './cqm-graph.component.html'
})

export class CqmGraphComponent implements OnInit {
    @Input() circuit: string;

    graph: Graph;

    private activeRecord: Record = null;
    private event: MouseEvent;

    constructor(
        private cqmService: CqmService
    ) { }

    getGraph(circuit: string) {
        this.cqmService.getGraph(circuit).then(graph => this.graph = graph);
    }

    leave() {
        this.activeRecord = null;
    }

    move(event: MouseEvent) {
        this.event = event;
        // get the time the current graph starts
        const graphStart = this.graph['period-start'];
        // the key at the end of the image is:
        const graphKeyWidth = 141;
        // console.log(event);
        // Get the mouse x-position and graph width (offset by -5 to adjust for image edge)
        const xPosition = Math.round(event.offsetX - 5);
        const graphWidth = event.target['width'];

        // Check if mouse is within the graph
        if (xPosition < (graphWidth - graphKeyWidth) && xPosition > 0 ) {
            let sectionTime = new Date(graphStart);
            sectionTime.setSeconds(sectionTime.getSeconds() + (xPosition * 100));

            const graphTime = sectionTime.toTimeString().substring(0, 8);
            const timestamp = sectionTime.toISOString().substring(0, 19) + 'Z';

            let record = this.graph['record'].find(record => record.timestamp === timestamp);
            if (record) {
                record.displayTime = graphTime;
                this.activeRecord = record;
            }
        } else {
            this.activeRecord = null;
        }
    }

    ngOnInit(): void {
        this.getGraph(this.circuit);
    }
}
