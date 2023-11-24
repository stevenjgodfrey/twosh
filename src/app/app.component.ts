import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles.css']
})
export class AppComponent implements OnInit {
  title = 'twosh';
  isVisible = "false";
  href: string = '';

  showModal = false;
  selectedRow: any;

  constructor( private router: Router
              ,private dataService: DataService
               ) {
                this.dataService.showModal$.subscribe((show) => (this.showModal = show));
                this.dataService.selectedRow$.subscribe((row) => (this.selectedRow = row));
                }

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
