import { Component, Input } from '@angular/core';
import { EntryService } from '../services/entry.service';
import { AchievementsService } from '../services/achievements.service';

@Component({
  selector: 'app-subcomponent',
  templateUrl: './subcomponent.component.html'
})
export class SubcomponentComponent {
  selectedEntry: string = '';
  selectedEntryDescription: string = '';

  constructor(private entryService: EntryService
             ,private achievementsService: AchievementsService) {}

  ngOnInit() {
    this.entryService.getSelectedEntry().subscribe(entry => {
      this.selectedEntry = entry;
      this.achievementsService.getData("achievement-description").subscribe((data) => {
        for (const item of data) {
          // You can perform additional logic or modifications here if needed
          if (item.field1 == entry) {
            this.selectedEntryDescription = item.field2;
          }
        }
    });
  });
}}
