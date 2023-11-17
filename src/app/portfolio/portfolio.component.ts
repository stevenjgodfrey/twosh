import { Component } from '@angular/core';

@Component({
  selector: 'portfolio-root',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {


  module: string = '';

  setModule(mod: string): void {

    this.module = mod;
  }

}
