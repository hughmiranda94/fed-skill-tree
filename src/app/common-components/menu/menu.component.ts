import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuHidden = true;
  private menuStatus$;

  constructor(private menuService: MenuService) {
    this.menuStatus$ = this.menuService.getMenuStatusObservable();
  }

  ngOnInit() {
    this.menuStatus$.subscribe(status => {
      console.log('status = ', status);
      this.menuHidden = status === 'hidden';
    });
  }

  toggleMenu() {
    this.menuService.toggleMenu();
  }

}
