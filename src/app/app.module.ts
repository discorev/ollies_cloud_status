import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { HttpModule }           from '@angular/http';
import { RouterModule }         from '@angular/router';

import { AppComponent }         from './app.component';
import { DataCenterComponent }  from './data-center.component';
import { CqmGraphComponent }    from './cqm-graph.component';
import { GraphDetailComponent } from './graph-detail.component';
import { CqmService }           from './cqm.service';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot([
            {
                 path: '',
                 component: DataCenterComponent
            },
            {
                path: 'data-center',
                component: DataCenterComponent
            },
            {
                path: 'data-center/:name',
                component: DataCenterComponent
            }
        ])
    ],
    declarations: [
        AppComponent,
        DataCenterComponent,
        CqmGraphComponent,
        GraphDetailComponent
    ],
    providers: [
        CqmService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
