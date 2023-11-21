import { Component, EventEmitter, Output, OnInit  } from '@angular/core';

@Component({
  selector: 'portfolio-root',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent  implements OnInit{

  // output  an event emitter that will be used to send data to the parent component
  @Output() isVis: EventEmitter<string> = new EventEmitter();

  emitSomething(isVisib: string) {
    console.log('emitting something' + isVisib)
    this.isVis.emit(isVisib)
  }
  module: string = '';

  setModule(mod: string): void {

    this.module = mod;
  }

  ngOnInit() {
    this.emitSomething('false');
  }


}
