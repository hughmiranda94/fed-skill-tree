import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsDataService {

  randomDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, magna eu varius
   faucibus, est augue tempor libero, non venenatis diam ligula quis mauris. Quisque rutrum nec ex ac feugiat. Duis
   urna arcu, porta a dui a, lacinia molestie arcu. In rutrum euismod pharetra. Phasellus tincidunt, eros at tincidunt
   vulputate, diam arcu varius urna, sed lacinia risus felis non neque.`;

  skills = {
    technologies: [
      {
        id: '01',
        name: 'HTML',
        icon: '#',
        description: this.randomDescription
      },
      {
        id: '02',
        name: 'CSS',
        icon: '#',
        description: this.randomDescription
      },
      {
        id: '03',
        name: 'JavaScript',
        icon: '#',
        description: this.randomDescription
      },
      {
        id: '04',
        name: 'FED Core',
        icon: '#',
        description: this.randomDescription
      }
    ],

    topics: [
      {
        id:'001',
        name: 'TS',
        technologyId: '03'
      },
      {
        id:'002',
        name: 'JSX',
        technologyId: '03'
      },
      {
        id:'003',
        name: 'Accessible',
        technologyId: '01'
      },
      {
        id:'003',
        name: 'SASS',
        technologyId: '02'
      },
      {
        id:'004',
        name: 'BEM',
        technologyId: '02'
      },
      {
        id:'005',
        name: 'ES6',
        technologyId: '03'
      },
      {
        id:'006',
        name: 'Semantic',
        technologyId: '01'
      },
      {
        id:'007',
        name: 'Topic',
        technologyId: '04'
      },
      {
        id:'008',
        name: 'Topic',
        technologyId: '04'
      },
      {
        id:'009',
        name: 'Topic',
        technologyId: '04'
      },
      {
        id:'010',
        name: 'Topic',
        technologyId: '04'
      }
    ],
  };

  constructor() { }

  getSkills() {
    return this.skills;
  }

  getTechnologies() {
    return this.skills.technologies;
  }

  getTechnologyById(id) {
    return this.skills.technologies.find(tech => tech.id === id);
  }

  getTopics(technologyId) {
    return this.skills.topics.filter(topic => topic.technologyId === technologyId);
  }

  getTopicById(id) {
    return this.skills.technologies.find(tech => tech.id === id);
  }
}
