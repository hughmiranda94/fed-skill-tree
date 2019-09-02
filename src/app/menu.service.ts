import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuStatus = 'hidden';
  private menuStatus$ = new Subject<string>();
  private menuOptions = [
    {
      optionName: 'Home',
      routerLink: ['/home'],
      adminOption: false
    },
    {
      optionName: 'Tree',
      routerLink: ['/tree'],
      adminOption: false
    },
    // {
    //   optionName: 'Settings',
    //   routerLink: ['/settings'],
    //   adminOption: false
    // },
    {
      optionName: 'Technologies',
      routerLink: ['/admin/technologies/table'],
      adminOption: true
    },
    {
      optionName: 'Topics',
      routerLink: ['/admin/topics/table'],
      adminOption: true
    },
    {
      optionName: 'References',
      routerLink: ['/admin/references/table'],
      adminOption: true
    },
  ];


  constructor() { }

  getMenuStatusObservable() {
    return this.menuStatus$;
  }

  toggleMenu() {
    this.menuStatus === 'hidden' ? this.menuStatus = 'shown' : this.menuStatus = 'hidden' ;
    this.menuStatus$.next(this.menuStatus);
    console.log('toggle to: ', this.menuStatus);
  }

  getMenuOptions() {
    return this.menuOptions;
  }
}
