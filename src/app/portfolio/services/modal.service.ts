import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private selectedRowSubject = new BehaviorSubject<any>(null);
  selectedRow$: Observable<any> = this.selectedRowSubject.asObservable();

  private showModalSubject = new BehaviorSubject<boolean>(false);
  showModal$: Observable<boolean> = this.showModalSubject.asObservable();

  setSelectedRow(row: any): void {
    this.selectedRowSubject.next(row);
  }

  openModal(): void {
    this.showModalSubject.next(true);
  }

  closeModal(): void {
    this.showModalSubject.next(false);
  }
}
