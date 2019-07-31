import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillCardService {

  skillCards = [
    {
      id: '01',
      name: 'HTML',
      icon: '#',
      score: '85',
      notification: true
    },
    {
      id: '02',
      name: 'CSS',
      icon: '#',
      score: '85',
      notification: true
    },
    {
      id: '03',
      name: 'JavaScript',
      icon: '#',
      score: '85',
      notification: true
    },
    {
      id: '04',
      name: 'FED Core',
      icon: '#',
      score: '85',
      notification: true
    }
  ];

  constructor() { }

  getSkillCardInfo(id: string) {
    return this.skillCards.find(skillCard => skillCard.id === id);
  }

  getSkillCards() {
    return this.skillCards;
  }
}
