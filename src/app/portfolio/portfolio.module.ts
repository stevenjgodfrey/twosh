import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { SubcomponentComponent } from './subcomponent/subcomponent.component';
import { EntryService } from './services/entry.service';

@NgModule({
  declarations: [
    PortfolioComponent,
    IntroductionComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    SubcomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    PortfolioComponent
  ],
  providers: [EntryService],
  bootstrap: [PortfolioComponent]
})
export class PortfolioModule { }
