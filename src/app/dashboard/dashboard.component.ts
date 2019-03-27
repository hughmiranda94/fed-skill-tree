import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user;

  constructor(private userData : UserDataService) { }

  ngOnInit() {
    this.user = this.userData.getUserData();
  }

}
