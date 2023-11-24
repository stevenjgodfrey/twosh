import { Component, Input, OnInit } from '@angular/core';
import { EntryService } from '../services/entry.service';
import { ModalService } from '../services/modal.service';
import { AchievementsService } from '../services/achievements.service';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html'
})
export class AchievementComponent implements OnInit{

  entryClicked : string = '';
  @Input() items: any[] = [];
  @Input() fieldType:string = '';
  dataItems: any[] = [];
  showModal = false;
  selectedRow: any;
  selectedAchievementDescription: string = '';

  constructor(private entryService: EntryService,
              private dataService: ModalService,
              private achievementsService: AchievementsService) {}

  selectRow(row: any): void {
    this.selectedRow = row;
    this.dataService.setSelectedRow(row);
    this.dataService.openModal();
              }

  openModal(dataItem: any): void {

    this.achievementsService.getData("achievement-description").subscribe((data) => {
      for (const item of data) {
        if (item.field1 == dataItem.onClick) {
          this.selectedAchievementDescription = item.field2;
        }
      }
      this.selectRow({"header":dataItem.field1,"body":this.selectedAchievementDescription});
    });
  }

  ngOnInit(): void {
    this.dataItems = this.items.filter(item => item.fieldType !== "header");
    this.onEntryClicked(this.dataItems[0].onClick, this.dataItems[0]);
    this.dataService.showModal$.subscribe((show) => (this.showModal = show));
  }

  setActive(selectedItem: any): void {
    this.dataItems.forEach(item => item.isActive = false);
    selectedItem.isActive = true;
  }

  onEntryClicked(entry: string, selectedItem: any) {
    this.entryClicked = entry;
    this.entryService.setSelectedEntry(entry);
    this.setActive(selectedItem);
  }

}
