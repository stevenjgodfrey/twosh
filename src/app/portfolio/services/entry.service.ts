import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntryService {
  private selectedEntrySubject = new BehaviorSubject<string>('');

  setSelectedEntry(entry: string) {
    this.selectedEntrySubject.next(entry);
  }

  getSelectedEntry() {
    return this.selectedEntrySubject.asObservable();
  }
}
