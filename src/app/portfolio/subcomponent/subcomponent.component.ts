import { Component, Input } from '@angular/core';
import { EntryService } from '../services/entry.service';

@Component({
  selector: 'app-subcomponent',
  templateUrl: './subcomponent.component.html',
  styleUrls: ['./subcomponent.component.css']
})
export class SubcomponentComponent {
  selectedEntry: string = '';

  constructor(private entryService: EntryService) {}

  ngOnInit() {
    this.entryService.getSelectedEntry().subscribe(entry => {
      this.selectedEntry = entry;
    });
  }
}
