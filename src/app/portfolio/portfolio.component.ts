import { Component, OnInit } from '@angular/core';
import { AchievementsService } from './services/achievements.service';
import { EntryService } from './services/entry.service';

@Component({
  selector: 'portfolio-root',
  templateUrl: './portfolio.component.html'
})
export class PortfolioComponent implements OnInit {

  constructor(private achievementsService: AchievementsService,
              private entryService: EntryService) {}
  entryClicked : string = '';

  module: string = 'introduction';
  items: any[] = [];
  menu: any[] = [];

  setActive(selectedMenuItem: any): void {
    this.menu.forEach(menuItem => menuItem.isActive = false);
    selectedMenuItem.isActive = true;
  }
  onEntryClicked(entry: string, selectedItem: any) {
    this.entryClicked = entry;
    this.entryService.setSelectedEntry(entry);
    if (entry != 'introduction') {
    this.setActive(selectedItem);
    }
  }

  setModule(mod: string, menuItem: any): void {

    this.items = [];
    this.module = mod;
    this.achievementsService.getData(this.module).subscribe((data) => {
    this.items = data;
    this.onEntryClicked(mod, menuItem );
    });

  }

  ngOnInit() {

    this.achievementsService.getData('menu').subscribe((data) => {
      this.menu = data;
      this.setModule(this.module, null);
      });

    };



  }

