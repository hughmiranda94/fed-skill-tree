import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/menu.service';
import { SettingsService } from 'src/app/settings.service';
import { Observable } from 'rxjs';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuHidden = true;
  private menuStatus$: Observable<string>;
  public isNightMode$: Observable<boolean>;
  public menuOptions;

  constructor(private menuService: MenuService, private settingsService: SettingsService, private userDataService: UserDataService) {
    this.menuStatus$ = this.menuService.getMenuStatusObservable();
    this.isNightMode$ = this.settingsService.isNightMode();
    this.menuOptions = this.menuService.getMenuOptions().filter(option => {
      return !this.userDataService.getUserData().isAdmin ? !option.adminOption : true;
    });
  }

  ngOnInit() {
    this.menuStatus$.subscribe(status => {
      this.menuHidden = status === 'hidden';
    });
  }

  toggleMenu() {
    this.menuService.toggleMenu();
  }

  toggleNightMode() {
    this.settingsService.toggleNightMode();
  }

}
