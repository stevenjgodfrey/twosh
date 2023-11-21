import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html'
})
export class IntroductionComponent {
  @Input() items: any[] = [];

}
