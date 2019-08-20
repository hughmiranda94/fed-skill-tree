import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private nightMode = true;
  private isNightMode$ = new BehaviorSubject<boolean>(this.nightMode);

  constructor() { }

  toggleNightMode() {
    console.log('toggle');
    this.nightMode = !this.nightMode;
    this.isNightMode$.next(this.nightMode);
  }

  isNightMode() {
    this.isNightMode$.next(this.nightMode);
    return this.isNightMode$;
  }
}
