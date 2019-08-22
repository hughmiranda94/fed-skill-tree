import { Injectable } from '@angular/core';

import { TechnologyService } from './services/technology.service';
import { TechnologiesDataService } from '../services/technologies-data.service';

import { TopicService } from './services/topic.service';
import { TopicsDataService } from '../services/topics-data.service';


import { ReferenceService } from './services/reference.service';
import { ReferencesDataService } from '../services/references-data.service';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    
    private technology: TechnologyService,
    private technologiesData: TechnologiesDataService,
  
    private topic: TopicService,
    private topicsData: TopicsDataService,
  
    private reference: ReferenceService,
    private referencesData: ReferencesDataService,
  ) { }

  data = {
    technologies: this.technologiesData,
    topics: this.topicsData,
    references: this.referencesData
  }
  
  service = {
    technologies: this.technology,
    topics: this.topic,
    references: this.reference
  }

  tablesJoin = [
    {
      table: 'Reference',
      tableData: 'references',
      joinId: 'topicId',
    },
    {
      table: 'Technology',
      tableData: 'technologies',
      joinId: 'parentId',
    },
    {
      table: 'Topic',
      tableData: 'topics',
      joinId: 'technologyId',
    }
  ]

  getTableJoin(table) {
    let data = {}
    
    data = this.tablesJoin.find(item=>item.table === table)

    return data
  }

  getJoinByModel(model) {
    let data = {}
    
    data = this.tablesJoin.find(item=>item.joinId === model)

    return data
  }

  getTypeData(type) {
    let data
    data = {type: type ? type : ' '}
    return data
  }
}
