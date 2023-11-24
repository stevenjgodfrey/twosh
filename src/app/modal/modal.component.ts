// modal.component.ts

import { Component, Input } from '@angular/core';
import { ModalService } from '../portfolio/services/modal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent {
  @Input() selectedRow: any;
  private subscription: Subscription;

  constructor(private dataService: ModalService) {
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
