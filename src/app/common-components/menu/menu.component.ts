import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/menu.service';
import { SettingsService } from 'src/app/settings.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuHidden = true;
  private menuStatus$;
  public isNightMode$: Observable<boolean>;

  constructor(private menuService: MenuService, private settingsService: SettingsService) {
    this.menuStatus$ = this.menuService.getMenuStatusObservable();
    this.isNightMode$ = this.settingsService.isNightMode();
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
