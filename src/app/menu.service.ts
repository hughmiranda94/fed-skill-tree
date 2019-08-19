import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuStatus = 'hidden';
  private menuStatus$ = new Subject<string>();


  constructor() { }

  getMenuStatusObservable() {
    return this.menuStatus$;
  }

  toggleMenu() {
    this.menuStatus === 'hidden' ? this.menuStatus = 'shown' : this.menuStatus = 'hidden' ;
    this.menuStatus$.next(this.menuStatus);
    console.log('toggle to: ', this.menuStatus);
  }
}
