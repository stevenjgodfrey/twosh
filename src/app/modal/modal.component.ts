// modal.component.ts

import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent {
  @Input() selectedRow: any;
  private subscription: Subscription;

  constructor(private dataService: DataService) {
    this.subscription = this.dataService.selectedRow$.subscribe(
      (row) => (this.selectedRow = row)
    );
  }

  closeModal(): void {
    this.dataService.closeModal();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
