import { Injectable } from '@angular/core';
import { TopicsDataService } from '../../services/topics-data.service';
import { HelperService } from '../../services/helper.service';
import { Topic } from '../structurs';
import { TechnologiesDataService } from '../../services/technologies-data.service';

@Injectable({
  providedIn: 'root'
})
export class TopicService implements Topic {
  type: "topics";
  id: '';
  technologyId: '';
  name: '';
  tags: [];
  description: '';

  constructor(
    private topicsData :  TopicsDataService,
    private helper: HelperService,
    private technologiesData :  TechnologiesDataService) { }

  getList(element,type){
    let body = this[type].getSpecificData(element);

    if(type === 'topicsData') {
      return this.helper.setFilterTopic(body, element)
    }
    else {
      return this.helper.dropdownObjectToArray(body, element[0], element[1])
    }
  }

  getKeys() {
    return ['id','technologyId','name','tags', 'description']
  }

  getDropFormat() {
    return []
  }


  oterTableDrop() {
    let list = this.getList(['name', 'id'], 'technologiesData')

    return [
      {
        key: 'technologyId',
        label: 'Technology:',
        model: 'technologyId',
        list: list,
        pos: 'row-0-3 col-0-3'
      }
    ]
  }

  getTagFormat() {
    let list = this.getList(['tags'], 'topicsData')

    return [
      {
        key: 'tags',
        label: 'Tags: ',
        model: [],
        list: list,
        pos: 'row-3-3 col-3-6'
      }
    ]
  }

  getTextFormat() {
    return [
      {
        key: 'name',
        text: 'Name',
        pos: 'row-0-3 col-3-6'
      }
    ]
  }

  getTextAreaFormat() {
    return [
      {
        key: 'description',
        text: 'Description:',
        pos: 'row-3-8 col-0-4'
      }
    ]
  }

  setValues(data) {
    if(Object.keys(data).length === 0)
      data = this.defaultData()

    this.id = data.id !== undefined? data.id : this.id;
    this.name = data.name !== undefined? data.name : this.name;
    this.tags = data.tags !== undefined? data.tags : this.tags;
    this.description = data.description !== undefined? data.description : this.description;
    this.technologyId = data.technologyId !== undefined? data.technologyId : this.technologyId;
  }


  defaultData() {
    return {
      id: '',
      name: '',
      tags: [],
      description: '',
      technologyId: ''
    }
  }

  getDataS() {
    return {
      id: this.id? this.id : '',
      name: this.name? this.name : '',
      tags: this.tags? this.tags : [],
      description: this.description? this.description : [],
      technologyId: this.technologyId? this.technologyId : '',
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

    if(this[item] && item === 'technologyId') {
      element = this.technologiesData.getSpecificId(this[item]);
      data[item] = element.name
    }
  }

  getDataTable() {
    let keys = ['name', 'id', 'tags', 'technologyId']
    let data = this.topicsData.getSpecificData(keys);

    data.map(item => {
      let technology = this.technologiesData.getSpecificId(item.technologyId);
      item.technologyId = technology.name

      return item
    })

    return data
  }

  getData() {
    return {
      title: 'TOPICS',
      textButton: 'ADD TOPIC',
      linkButton: '../create',
      header: ['Technology', 'Topic', 'Tags', ''],
      headerKey: ['technologyId', 'name', 'tags', ''],
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
        type: 'filterTopic',
        header: true,
        list: [],
        column: 2,
        notText: true
      },
      {
        type: 'linkButton',
        text: 'Edit',
        link: '../../topics/edit/',
        column: 3,
        headerKey: 'id',
        notText: true
      },
      {
        type: 'tags',
        column: 2,
        headerKey: 'tags',
        notText: true
      }
    ]
  }

}
