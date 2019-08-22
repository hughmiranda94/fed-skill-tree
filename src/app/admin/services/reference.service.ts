import { Injectable } from '@angular/core';
import { Reference } from '../structurs';
import { TopicsDataService } from '../../services/topics-data.service';
import { HelperService } from '../../services/helper.service';
import { ReferencesDataService } from '../../services/references-data.service';
import { TechnologiesDataService } from '../../services/technologies-data.service';
import { TechnologyService } from './technology.service';
import { TopicService } from './topic.service';

@Injectable({
  providedIn: 'root'
})
export class ReferenceService implements Reference {
  type: "references";
  id: '';
  topicId: '';
  name: '';
  class: '';
  tags: [];
  description: '';
  url: '';
  subscriptionNeeded: false;

  constructor(
    private references : ReferencesDataService, 
    private helper: HelperService,
    private technologies :  TechnologiesDataService, 
    private topics :  TopicsDataService
  ) { }

  getListJoin(data, id) {
    let JoinResult = this[data.tableData].getConditionData(data.joinId, id)

    return this.helper.dropdownObjectToArray(JoinResult, 'name', 'id')
  }

  getList(element, type){
    let body = this[type].getSpecificData(element);
  
    if(type === 'references') {
      return this.helper.setFilterTopic(body, element)
    }
    else {
      return this.helper.dropdownObjectToArray(body, element[0], element[1])
    }
  }
  

  getKeys() {
    return ['id','topicId','name','tags', 'description','class', 'url', 'technologyId']
  }

  getDropFormat() {
    return [
      {
        keys: ['class'],
        label: 'Reference Class:',
        model: 'class',
        pos: 'row-3-5 col-4-6'
      }
    ]
  }

  oterTableDrop() {
    let list = []
    list.push(this.getList(['name', 'id'], 'technologies'))
    
    return [
      {
        key: 'technologyId',
        label: 'Technology:',
        model: 'technologyId',
        list: list[0],
        pos: 'row-0-3 col-0-3'
      },
      {
        key: 'topicId',
        label: 'Topic:',
        model: 'topicId',
        list: [],
        showFrom: {table: 'Topic', model: 'technologyId'},
        disabled: true,
        pos: 'row-0-3 col-3-6'
      }
    ]
  }
  
  getTagFormat() {
    let list = this.getList(['tags'], 'references')

    return [
      {
        key: 'tags',
        label: 'Tags: ',
        model: [],
        list: list,
        pos: 'row-6-9 col-3-6'
      }
    ]
  }
  
  getTextFormat() {
    return [
      {
        key: 'name',
        text: 'Name:',
        pos: 'row-3-6 col-0-2'
      },
      {
        key: 'url',
        text: 'Url:',
        pos: 'row-3-6 col-2-4'
      }
    ]
  }
  
  getTextAreaFormat() {
    return [
      {
        key: 'description',
        text: 'Description:',
        pos: 'row-6-9 col-0-3'
      }
    ]
  }

  getButtonFormat() {
    return [
      {
        text: '',
        btnClass: '',
        action: null
      }
    ]
  }

  setVlues(data) {
    if(Object.keys(data).length === 0)
      data = this.defaultData()

    this.id = data.id !== undefined? data.id : this.id;
    this.topicId = data.topicId !== undefined? data.topicId : this.topicId;
    this.name = data.name !== undefined? data.name : this.name;
    this.class = data.class !== undefined? data.class : this.class;
    this.tags = data.tags !== undefined? data.tags : this.tags;
    this.description = data.description !== undefined? data.description : this.description;
    this.url = data.url !== undefined? data.url : this.url;
    this.subscriptionNeeded = data.subscriptionNeeded !== undefined? data.subscriptionNeeded : this.subscriptionNeeded;
  }

  defaultData() {
    return {
      id: '',
      topicId: '',      
      name: '',
      class: '',
      tags: [],
      description: '',
      url: '',
      subscriptionNeeded: false
    }
  }
  
  getDataS() {
    return {
      id: this.id? this.id : '',
      topicId: this.topicId? this.topicId : '',      
      name: this.name? this.name : '',
      class: this.class? this.class : '',
      tags: this.tags? this.tags : [],
      description: this.description? this.description : [],
      url: this.url? this.url : '',
      subscriptionNeeded: this.subscriptionNeeded? this.subscriptionNeeded : false
    }
  }

  getDataEdit() {
    let keys = this.getKeys()
    let data = {}

    keys.forEach(item => {
      if(Array.isArray(this[item])) data[item] = this[item]? this[item] : []
      else
        switch (typeof this[item]) {
          case 'string':
              data[item] = this[item]? this[item] : ''
            break;
          case 'boolean':
              data[item] = this[item]? this[item] : false            
            break;
        }

      this.getTableReferences(item, data)
    })

    return data
  }

  getTableReferences(item, data) {
    let element
    if(this[item] && item === 'topicId') {
      element = this.topics.getSpecificId(this[item]);
      data[item] = element.name
    }

    if(this[item] && item === 'technologyId') {
      element = this.technologies.getSpecificId(this[item]);
      data[item] = element.name
    }
  }


  getDataTable() {
    let keys = ['name', 'id', 'topicId', 'url']
    let data = this.references.getSpecificData(keys);

    data.map(item => {
      let element = this.topics.getSpecificId(item.topicId);
      item.topicId = element.name

      element = this.technologies.getSpecificId(element.technologyId);
      item.technologyId = element.name

      return item
    })

    return data
  }

  getData() {
    return {
      title: 'REFERENCES',
      textButton: 'CREATE REFERENCE',
      linkButton: '../create',
      header: ['Technology', 'Topic', 'Reference', 'Url', 'Edit'],
      headerKey: ['technologyId', 'topicId', 'name', 'url', ''],
    }
  }

  getItemsTable() {
    return [
      {
        type: 'filterText',
        header: true,
        list: [],
        column: 0,
        notText: true
      },
      {
        type: 'filterText',
        header: true,
        list: [],
        column: 1,
        notText: true
      },
      {
        type: 'filterText',
        header: true,
        list: [],
        column: 2,
        notText: true
      },
      {
        type: 'linkButton',
        text: 'Edit',
        link: '../../references/edit/',
        column: 4,
        headerKey: 'id',
        notText: true
      }
    ]
  }
}
