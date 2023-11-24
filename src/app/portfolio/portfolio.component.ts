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
  public introComponent: string = 'introduction';
  items: any[] = [];
  menu: any[] = [];

  setActive(selectedMenuItem: any): void {
    this.menu.forEach(menuItem => menuItem.isActive = false);
    selectedMenuItem.isActive = true;
  }

  setModule(mod: string, menuItem: any): void {
    this.items = [];
    this.entryClicked = mod;
    this.achievementsService.getData(mod).subscribe((data) => {
      this.items = data;
      this.entryService.setSelectedEntry(mod);
      this.setActive(menuItem);
    });
  }

  setIntroModule(mod: string): void {
    this.items = [];
    this.entryClicked = mod;
    this.menu.forEach(menuItem => menuItem.isActive = false);
    this.achievementsService.getData(mod).subscribe((data) => {
      this.items = data;
      this.entryService.setSelectedEntry(mod);
    });
  }

  ngOnInit() {
    this.achievementsService.getData('menu').subscribe((data) => {
      this.menu = data;
      this.setIntroModule(this.introComponent);
      });
    };



  }

