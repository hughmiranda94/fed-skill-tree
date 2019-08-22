import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TechnologiesDataService {
  
  technologies = [
    {
      id: '1sds',
      parentId: '2sds',
      name: 'ES6',
      tags: ['Versión', 'JS'],
      evaluationType: 'Quiz',
      description: 'description',
      topics:[
        {
          id: "1asl",
          name: "Variables",
          parent: "",
          tags: "",
          References:[
            {
                name:"var, let & const",
                class:"Article",
                tags:"",
                url:"",
                subscriptionNeeded:"true"
            },
            {
                name:"Pluralsight Training: JS Variables",
                class:"Training",
                tags:"",
                url:"",
                subscriptionNeeded:"false"
            }
          ]
        }
      ]
    },
    {
      id: '2sds',
      parentId: '',
      name: 'JS',
      tags: ['lenguaje de programación', 'interpretado', 'orientado a objetos'],
      evaluationType: 'Project',
      description: 'description',
      topics:[]
    },
    {
      id: '3sds',
      parentId: '',
      name: 'HTML',
      tags: ['Self Evaluation'],
      evaluationType: 'Self Evaluation',
      description: 'description',
      topics:[]
    },
    {
      id: '4sds',
      parentId: '',
      name: 'CSS',
      tags: ['Quiz', 'Self Evaluation'],
      evaluationType: 'Quiz',
      description: 'description',
      topics:[]
    }
  ]

  constructor() { }

  
  getData() {
    return this.technologies;
  }
  
  getSpecificId(technologyId) {
    let technology;

    let foundLeaf = this.technologies.find(l=>l.id === technologyId);

    (foundLeaf) ? technology = foundLeaf : '';

    return technology;
  }

  getConditionData(keys, values) {
    let data;
    if(Array.isArray(keys) && Array.isArray(values)) {
      data = this.technologies.filter((item) => {
        let band = true

        for (let i = 0; i < keys.length; i++) {
          if(item[keys[i]] !== [values[i]]) {
            band = false
            break;
          }
        }

        return band
      })
    }

    if(!Array.isArray(keys) && !Array.isArray(values))
      data = this.technologies.filter(l=>l[keys] === [values]);

    return data;
  }

  
  getSpecificData(keys) {
    let technology;

    technology = this.technologies.map(item => {
      let data = {}

      keys.forEach(element => {
        data[element] = item[element]
      });

      return data
    })

    return technology
  }

}
