import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { HttpModule }           from '@angular/http';

import { AppComponent }         from './app.component';
import { CqmGraphComponent }    from './cqm-graph.component';
import { GraphDetailComponent } from './graph-detail.component';
import { CqmService }           from './cqm.service';


@NgModule({
  imports:      [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    CqmGraphComponent,
    GraphDetailComponent
  ],
  providers:    [
      CqmService
  ],
  bootstrap:    [
    AppComponent
  ]
})
export class AppModule { }
