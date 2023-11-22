import { Component, Input, OnInit } from '@angular/core';
import { EntryService } from '../services/entry.service';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html'
})
export class AchievementComponent implements OnInit{

  entryClicked : string = '';
  @Input() items: any[] = [];
  @Input() fieldType:string = '';
  dataItems: any[] = [];

  constructor(private entryService: EntryService) {}

  ngOnInit(): void {
    this.dataItems = this.items.filter(item => item.fieldType !== "header");
    this.onEntryClicked(this.items[1].onClick, this.items[1]);

  }
  setActive(selectedItem: any): void {
    this.items.forEach(item => item.isActive = false);
    selectedItem.isActive = true;
  }
  onEntryClicked(entry: string, selectedItem: any) {
    this.entryClicked = entry;
    this.entryService.setSelectedEntry(entry);
    this.setActive(selectedItem);
  }

}
