import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles.css']
})
export class AppComponent implements OnInit {
  title = 'twosh';
  isVisible = "false";
  href: string = '';

  constructor( private router: Router) { }

  setVisible(visible: string): void {
    this.isVisible = visible;
  }

  ngOnInit() {

    if (this.router ) {
      this.router.events.subscribe(() => {
        if (this.router && this.router.url) {
          this.href = this.router.url;
            if (this.href == "/portfolio" || this.href == "/") {
              this.setVisible("false");
          }
        }
      });
    }
  }
}
