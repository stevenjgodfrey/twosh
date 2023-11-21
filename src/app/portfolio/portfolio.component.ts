import { Component, OnInit } from '@angular/core';
import { AchievementsService } from './services/achievements.service';

@Component({
  selector: 'portfolio-root',
  templateUrl: './portfolio.component.html'
})
export class PortfolioComponent implements OnInit {

  constructor(private achievementsService: AchievementsService) {}

  module: string = 'introduction';
  items: any[] = [];

  setModule(mod: string): void {

    this.module = mod;
    this.achievementsService.getData(this.module).subscribe((data) => {
    this.items = data;
    });
  }

  ngOnInit() {
    this.setModule(this.module);
    };
  }

