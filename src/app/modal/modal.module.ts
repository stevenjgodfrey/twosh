import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalComponent } from './modal.component';
import { ModalService } from '../portfolio/services/modal.service';

@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    ModalComponent
  ],
  providers: [ModalService],
  bootstrap: [ModalComponent]
})
export class ModalModule { }
