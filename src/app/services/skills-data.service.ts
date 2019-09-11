import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsDataService {

  randomDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, magna eu varius
   faucibus, est augue tempor libero, non venenatis diam ligula quis mauris. Quisque rutrum nec ex ac feugiat. Duis
   urna arcu, porta a dui a, lacinia molestie arcu. In rutrum euismod pharetra. Phasellus tincidunt, eros at tincidunt
   vulputate, diam arcu varius urna, sed lacinia risus felis non neque.`;

  skillsRequested = {
    technologies: [
      {
        id: '01',
        name: 'HTML',
        icon: 'assets/html.svg',
        description: this.randomDescription
      },
      {
        id: '02',
        name: 'CSS',
        icon: 'assets/css.svg',
        description: this.randomDescription
      },
      {
        id: '03',
        name: 'JavaScript',
        icon: 'assets/javascript.svg',
        description: this.randomDescription
      },
      {
        id: '04',
        name: 'FED Core',
        icon: 'assets/code.svg',
        description: this.randomDescription
      },

      {
        id: '05',
        name: 'TS',
        icon: '#',
        parentId: '03',
        description: this.randomDescription
      },
      {
        id: '06',
        name: 'JSX',
        icon: '#',
        parentId: '03',
        description: this.randomDescription
      },
      {
        id: '07',
        name: 'Accessible',
        icon: '#',
        parentId: '01',
        description: this.randomDescription
      },
      {
        id: '08',
        name: 'SASS',
        parentId: '02',
        description: this.randomDescription
      },
      {
        id: '09',
        name: 'BEM',
        icon: '#',
        parentId: '02',
        description: this.randomDescription
      },
      {
        id: '10',
        name: 'ES6',
        icon: '#',
        parentId: '03',
        description: this.randomDescription
      },
      {
        id: '11',
        name: 'Semantic',
        icon: '#',
        parentId: '01',
        description: this.randomDescription
      },
      {
        id: '12',
        name: 'Topic',
        icon: '#',
        parentId: '04',
        description: this.randomDescription
      },
      {
        id: '13',
        name: 'Topic',
        parentId: '04',
        description: this.randomDescription
      },
      {
        id: '14',
        name: 'Topic',
        icon: '#',
        parentId: '04',
        description: this.randomDescription
      },
      {
        id: '15',
        name: 'Topic',
        icon: '#',
        parentId: '04',
        description: this.randomDescription
      }
    ],

    topics: [
      {
        id: '001',
        name: 'TS',
        technologyId: '03'
      },
      {
        id: '002',
        name: 'JSX',
        technologyId: '03'
      },
      {
        id: '003',
        name: 'Accessible',
        technologyId: '01'
      },
      {
        id: '003',
        name: 'SASS',
        technologyId: '02'
      },
      {
        id: '004',
        name: 'BEM',
        technologyId: '02'
      },
      {
        id: '005',
        name: 'ES6',
        technologyId: '03'
      },
      {
        id: '006',
        name: 'Semantic',
        technologyId: '01'
      },
      {
        id: '007',
        name: 'Topic',
        technologyId: '04'
      },
      {
        id: '008',
        name: 'Topic',
        technologyId: '04'
      },
      {
        id: '009',
        name: 'Topic',
        technologyId: '04'
      },
      {
        id: '010',
        name: 'Topic',
        technologyId: '04'
      }
    ],
  };
  skills;
  filteredBy;
  constructor() {
    this.skills = Object.assign({}, this.skillsRequested)
  }

  getSkills() {
    return this.skills;
  }

  getTechnologies() {
    return this.skills.technologies;
  }

  getParentTechnologies() {
    return this.skills.technologies.filter(tech => !tech.parentId);
  }
  getChildsTechnologies(technologyId) {
    let childs = this.skillsRequested.technologies.filter(tech => tech.parentId===technologyId);
    return childs;
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

  search(word) {
    this.filteredBy = word
    let technologies = Object.assign({}, this.skillsRequested).technologies.filter((technology) => {
      return technology.name.toUpperCase().includes(this.filteredBy.toUpperCase())
    })

    this.skills = { ...this.skills, technologies };
    console.log(this.skills)
  }
}
