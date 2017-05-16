import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { CqmService }    from './cqm.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  showHeading = true;
  cqmCircuits: String[];

  constructor(
      private cqmService: CqmService,
  ) { }

  toggleHeading() {
    this.showHeading = !this.showHeading;
  }

  getCircuits(): void {
    this.cqmService.getList().then(circuits => this.cqmCircuits = circuits);
  }

  ngOnInit(): void {
    this.getCircuits();
  }
}

