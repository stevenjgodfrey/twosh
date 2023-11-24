import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalComponent } from './modal.component';
import { DataService } from '../data.service';

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
  providers: [DataService],
  bootstrap: [ModalComponent]
})
export class ModalModule { }
