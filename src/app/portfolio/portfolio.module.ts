import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PortfolioComponent } from './portfolio.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { SubcomponentComponent } from './subcomponent/subcomponent.component';
import { EntryService } from './services/entry.service';
import { AchievementComponent } from './achievement/achievement.component';
import { ModalModule } from '../modal/modal.module';
import { DynamicImageComponent } from 'src/app/dynamic-image/dynamic-image.component';


@NgModule({
  declarations: [
    PortfolioComponent,
    IntroductionComponent,
    SubcomponentComponent,
    AchievementComponent,
    DynamicImageComponent
  ],
  imports: [
    BrowserModule,
    ModalModule
  ],
  exports: [
    PortfolioComponent
  ],
  providers: [EntryService],
  bootstrap: [PortfolioComponent]
})
export class PortfolioModule { }
