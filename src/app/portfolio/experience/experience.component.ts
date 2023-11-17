import { Component, Output, EventEmitter } from '@angular/core';
import { EntryService } from '../services/entry.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  entryClicked : string = '';

  constructor(private entryService: EntryService) {}

  onEntryClicked(entry: string) {
    this.entryClicked = entry;
    this.entryService.setSelectedEntry(entry);
  }
}
