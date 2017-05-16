/**
 * Created by Ollie on 12/05/2017.
 */

import { Component, Input } from '@angular/core';

import { Record } from './record';

@Component({
    selector: 'graph-detail',
    templateUrl: './graph-detail.component.html',
    styleUrls: ['./graph-detail.component.css']
})

export class GraphDetailComponent {
    @Input() record: Record;
    @Input() event: MouseEvent;
}
