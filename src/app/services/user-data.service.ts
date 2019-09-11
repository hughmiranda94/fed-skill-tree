import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  user = {
    name: 'Hugo Miranda',
    isAdmin: true,
    picture:'',
    skills:{
      'B01-L01': 2,
      'B01-L02': 1,
      'B02-L01': 3,
      'B02-L02': 3,
    }
  }

  constructor() { }

  getUserData() {
    return this.user;
  }

  getProficiencyLevel(skill) {
    return (this.user.skills[skill]) ? this.user.skills[skill] : undefined;
  }

  setProficiencyLevel(skill, level) {
    (this.user.skills[skill]) ? this.user.skills[skill] = level : '';
  }
}
