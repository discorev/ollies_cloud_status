import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CqmService }    from './cqm.service';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'data-center',
    templateUrl: './data-center.component.html'
})

export class DataCenterComponent implements OnInit {
    showHeading = true;
    @Input() dataCenter: string;
    @Input() cqmCircuits: String[];

    constructor(
        private cqmService: CqmService,
        private route: ActivatedRoute
    ) { }

    toggleHeading() {
        this.showHeading = !this.showHeading;
    }

    getCircuits(dataCenter: string): Promise<String[]> {
        return this.cqmService.getCircuitsFor(dataCenter).then(circuits => this.cqmCircuits = circuits);
    }

    ngOnInit(): void {
        this.route.paramMap
            .map(params => params.get('name') || '')
            .switchMap(name => {
                this.dataCenter = name;
                return this.getCircuits(this.dataCenter);
            })
            .subscribe(cqmCircuits => this.cqmCircuits = cqmCircuits);
    }
}
