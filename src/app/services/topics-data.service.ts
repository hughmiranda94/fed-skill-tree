import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopicsDataService {
  topics = [
    {
      id: "1asl",
      name: "Variables",
      technologyId: "2sds",
      tags: ["Componente comun", "Uso en LP"],
      description: 'description',
      References:[
        {
            id: '1jli',
            name:"var, let & const",
            class:"Article",
            tags:"",
            url:"",
            subscriptionNeeded:"true"
        },
        {
            id: '2jli',
            name:"Pluralsight Training: JS Variables",
            class:"Training",
            tags:"",
            url:"",
            subscriptionNeeded:"false"
        }
      ]
    },
    {
      id:"2asl",
      name:"Arrow functions",
      technologyId:"1sds",
      tags: ["Funciones", "Retornan valor"],
      description: 'description',
      References:[
        {
            id: '3jli',
            name:"JavaScript: Arrow Functions for Beginners",
            class:"Article",
            tags:"",
            url:"",
            subscriptionNeeded:"false"
        }
      ]
    },
    {
        id:"3asl",
        name:"Destructuring",
        technologyId:"2sds",
        tags: ["Descomposicion", "Objetos"],
        description: 'description',
        References:[
          {
              id: '4jli',
              name:"Destructuring and parameter handling in ECMAScript 6",
              class:"Article",
              tags:"",
              url:"",
              subscriptionNeeded:"false"
          }
        ]
    },
    {
        id:"4asl",
        name:"Array Matching",
        technologyId:"4sds",
        tags: "",
        description: 'description',
        References:[
          {
              id: '5jli',
              name:"Array intersection, difference and union in ES6",
              class:"Article",
              tags:"",
              url:"",
              subscriptionNeeded:"false"
          }
        ]
    },
    {
      id:"5asl",
      name:"Object Matching",
      technologyId:"1sds",
      tags: "",
      References:[]
    },
    {
      id:"6asl",
      name:"Parameter Context Matching",
      technologyId:"1sds",
      tags: "",
      References:[]
    }
  ]

  constructor() { }

  getData() {
    return this.topics;
  }

  getSpecificId(topicId) {
    let topic;

    let foundLeaf = this.topics.find(l=>l.id === topicId);

    (foundLeaf) ? topic = foundLeaf : '';

    return topic;
  }

  getConditionData(keys, values) {
    let data;

    if(Array.isArray(keys) && Array.isArray(values)) {
      data = this.topics.filter((item) => {
        let band = true
        
        for (let i = 0; i < keys.length; i++) {
          if(item[keys[i]] !== values[i]) {
            band = false
            break;
          }
        }
        
        return band
      })
    }
    
    if(!Array.isArray(keys) && !Array.isArray(values))
      data = this.topics.filter(l=>l[keys] === values);

    return data;
  }

  getSpecificData(keys) {
    let topic;

    topic = this.topics.map(item => {
      let data = {}

      keys.forEach(element => {
        data[element] = item[element]
      });

      return data
    })

    return topic
  }

}
