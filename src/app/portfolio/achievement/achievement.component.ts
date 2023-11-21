import { Component, Input } from '@angular/core';
import { EntryService } from '../services/entry.service';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html'
})
export class AchievementComponent {

  entryClicked : string = '';
  @Input() items: any[] = [];
  @Input() fieldType:string = '';

  constructor(private entryService: EntryService) {}

  onEntryClicked(entry: string) {
    this.entryClicked = entry;
    this.entryService.setSelectedEntry(entry);
  }

}
