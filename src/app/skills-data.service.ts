import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsDataService {

  skills = {
    branches : [
      {
        name : 'HTML',
        leaves : [
          {
            id: 'B01-L01',
            title: 'HTML5',
            description: 'Bladflkj dalkjhfdal',
            completed: true,
            references:{
              videos:[
                'www.youtube.com'
              ],
              trainings:[
                'www.pluralsight.com'
              ],
              articles:[
                'www.medium.com'
              ],
              blogs:[                
                'www.freecodecamp.com'
              ],
            }
          },
          {
            id: 'B01-L02',
            title: 'Accesibility',
            description: 'Bladflkj dalkjhfdal',
            completed: false
          }
        ]
      },
      {
        name : 'CSS',
        leaves : [
          {
            id: 'B02-L01',
            title: 'CSS3',
            description: 'Bladflkj dalkjhfdal',
            completed: true
          },
          {
            id: 'B02-L02',
            title: 'Responsive',
            description: 'Bladflkj dalkjhfdal',
            completed: false
          }
        ]
      },
      {
        name : 'JavaScript',
        leaves : [
          {
            id: 'B03-L01',
            title: 'ES5',
            description: 'Bladflkj dalkjhfdal',
            completed: true
          },
          {
            id: 'B03-L02',
            title: 'ES6',
            description: 'Bladflkj dalkjhfdal',
            completed: true
          },
          {
            id: 'B03-L03',
            title: 'Observables',
            description: 'Bladflkj dalkjhfdal',
            completed: false
          }
        ]
      },
      {
        name : 'Angular',
        leaves : [
          {
            id: 'B04-L01',
            title: 'Lifecycle Hooks',
            description: 'Bladflkj dalkjhfdal',
            completed: true
          },
          {
            id: 'B04-L02',
            title: 'Pipes',
            description: 'Bladflkj dalkjhfdal',
            completed: false
          },
          {
            id: 'B04-L03',
            title: 'Directives',
            description: 'Bladflkj dalkjhfdal',
            completed: false
          },
          {
            id: 'B04-L04',
            title: 'Services',
            description: 'Bladflkj dalkjhfdal',
            completed: true
          }
        ]
      },
      {
        name : 'React',
        leaves : [
          {
            id: 'B05-L01',
            title: 'JSX',
            description: 'Bladflkj dalkjhfdal',
            completed: true
          },
          {
            id: 'B05-L02',
            title: 'Mounting',
            description: 'Bladflkj dalkjhfdal',
            completed: false
          },
          {
            id: 'B05-L03',
            title: 'Updating',
            description: 'Bladflkj dalkjhfdal',
            completed: false
          }
        ]
      },
      {
        name : 'CSS',
        leaves : [
          {
            id: 'B06-L01',
            title: 'CSS3',
            description: 'Bladflkj dalkjhfdal',
            completed: true
          },
          {
            id: 'B06-L02',
            title: 'Responsive',
            description: 'Bladflkj dalkjhfdal',
            completed: false
          }
        ]
      },
      {
        name : 'JavaScript',
        leaves : [
          {
            id: 'B07-L01',
            title: 'ES5',
            description: 'Bladflkj dalkjhfdal',
            completed: true
          },
          {
            id: 'B07-L02',
            title: 'ES6',
            description: 'Bladflkj dalkjhfdal',
            completed: true
          },
          {
            id: 'B07-L03',
            title: 'Observables',
            description: 'Bladflkj dalkjhfdal',
            completed: false
          }
        ]
      },
      {
        name : 'Angular',
        leaves : [
          {
            id: 'B08-L01',
            title: 'Lifecycle Hooks',
            description: 'Bladflkj dalkjhfdal',
            completed: true
          },
          {
            id: 'B08-L02',
            title: 'Pipes',
            description: 'Bladflkj dalkjhfdal',
            completed: false
          },
          {
            id: 'B08-L03',
            title: 'Directives',
            description: 'Bladflkj dalkjhfdal',
            completed: false
          },
          {
            id: 'B08-L04',
            title: 'Services',
            description: 'Bladflkj dalkjhfdal',
            completed: true
          }
        ]
      }
    ]
  }

  constructor() { }

  getSkills() {
    return this.skills;
  }

  getSpecificSkill(skillId) {
    console.log(skillId);
    let skill;
    this.skills.branches.forEach(b => {
      let foundLeaf = b.leaves.find(l=>l.id===skillId);
      (foundLeaf) ? skill = foundLeaf : '';
    });
    return skill;
  }
}
