import { Injectable } from '@angular/core';
import { Technology } from '../structurs';
import { TechnologiesDataService } from '../../services/technologies-data.service';
import { HelperService } from '../../services/helper.service';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService implements Technology {
  type: "technologies";
  id: '';
  parentId: '';
  name: '';
  tags: [];
  description: '';
  evaluationType: '';

  constructor(private technologiesData :  TechnologiesDataService, private helper: HelperService) { }

  
  getList(element, type){
    let body
    if(!type)
      body = this.technologiesData.getSpecificData(element);

    return this.helper.setFilterTopic(body, 'tags')
  }

  getKeys() {
    return ['id','parentId','name','tags','evaluationType', 'description']
  }
  
  getDropFormat() {
    return [
      {
        keys: ['evaluationType'],
        label: 'Evaluation Type:',
        model: 'evaluationType',
        pos: 'row-0-3 col-3-6'
      },
      {
        keys: ['name', 'id'],
        label: 'Child Of (optional):',
        model: 'parentId',
        pos: 'row-0-3 col-6-9'
      }
    ]
  }

  oterTableDrop() {
    return []
  }

  
  getTagFormat() {
    let list = this.getList(['tags'], false)
    //console.log(list)
    return [
      {
        key: 'tags',
        label: 'Tags: ',
        model: [],
        list: list,
        pos: 'row-3-3 col-4-7'
      }
    ]
  }
  
  getTextFormat() {
    return [
      {
        key: 'name',
        text: 'Name',
        pos: 'row-0-3 col-0-3'
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
    this.parentId = data.parentId !== undefined? data.parentId : this.parentId;
    this.name = data.name !== undefined? data.name : this.name;
    this.tags = data.tags !== undefined? data.tags : this.tags;
    this.description = data.description !== undefined? data.description : this.description;
    this.evaluationType = data.evaluationType !== undefined? data.evaluationType : this.evaluationType;      
  }

  defaultData() {
    return {
      id: '',
      parentId: '',
      name: '',
      tags: [],
      description: '',
      evaluationType: ''
    }
  }
  
  getDataS() {
    return {
      id: this.id? this.id : '',
      parentId: this.parentId? this.parentId : '',
      name: this.name? this.name : '',
      tags: this.tags? this.tags : [],
      description: this.description? this.description : [],
      evaluationType: this.evaluationType? this.evaluationType : ''
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

    if(this[item] && item === 'parentId') {
      element = this.technologiesData.getSpecificId(this[item]);
      data[item] = element.name
    }
  }

  getDataTable() {
    let keys = ['name', 'id', 'tags']
    let data = this.technologiesData.getSpecificData(keys);

    return data
  }

  getData() {
    return {
      title: 'TECHNOLOGIES',
      textButton: 'CREATE THECHNOLOGY',
      linkButton: '../create',
      header: ['Technology', 'Tags', 'Edit'],
      headerKey: ['name', 'tags', ''],
    }
  }

  getItemsTable() {
    return [
      {
        type: 'filterText',
        header: true,
        column: 0,
        list: [],
        notText: true
      },
      {
        type: 'filterTopic',
        header: true,
        list: [],
        column: 1,
        notText: true
      },
      {
        type: 'linkButton',
        text: 'Edit',
        link: '../../technologies/edit/',
        column: 2,
        headerKey: 'id',
        notText: true
      },
      {
        type: 'tags',
        column: 1,
        headerKey: 'tags',
        notText: true
      }
    ]
  }
}
