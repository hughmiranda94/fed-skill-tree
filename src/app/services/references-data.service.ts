import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReferencesDataService {

  references = [
    {
        id: '1jli',
        topicId: "1asl",
        name:"var, let & const",
        class:"Article",
        tags:[],
        url:"",
        description: 'description',
        subscriptionNeeded:"true"
      },
    {
        id: '2jli',
        topicId: "1asl",
        name:"Pluralsight Training: JS Variables",
        class:"Training",
        tags:[],
        url:"",
        description: 'description',
        subscriptionNeeded:"false"
    },
    {
        id: '3jli',
        topicId: "2asl",
        name:"JavaScript: Arrow Functions for Beginners",
        class:"Article",
        tags:[],
        url:"",
        description: 'description',
        subscriptionNeeded:"false"
    },
    {
        id: '4jli',
        topicId: "3asl",
        name:"Destructuring and parameter handling in ECMAScript 6",
        class:"Article",
        tags:[],
        url:"",
        description: 'description',
        subscriptionNeeded:"false"
    },
    {
        id: '5jli',
        topicId: "3asl",
        name:"Array intersection, difference and union in ES6",
        class:"Article",
        tags:["Blog"],
        url:"https://",
        description: 'description',
        subscriptionNeeded:"false"
    }
  ]

  constructor() { }

  getData() {
    return this.references;
  }

  getSpecificId(referenceId) {
    let reference;

    let foundLeaf = this.references.find(l=>l.id === referenceId);

    (foundLeaf) ? reference = foundLeaf : '';

    return reference;
  }

  
  getConditionData(keys, values) {
    let data;

    if(Array.isArray(keys) && Array.isArray(values)) {
      data = this.references.filter((item) => {
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
      data = this.references.filter(l=>l[keys] === [values]);

    return data;
  }

  getSpecificData(keys) {
    let reference;

    reference = this.references.map(item => {
      let data = {}

      keys.forEach(element => {
        data[element] = item[element]
      });

      return data
    })

    return reference
  }

}
