import { Injectable } from '@angular/core';
import { Reference, Technology, Topic, TypeData } from '../structurs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ReferencesDataService } from '../../services/references-data.service';
import { TechnologiesDataService } from '../../services/technologies-data.service';
import { TopicsDataService } from '../../services/topics-data.service';
import { ReferenceService } from '../services/reference.service';
import { TechnologyService } from '../services/technology.service';
import { TopicService } from '../services/topic.service';
import { AdminService } from '../admin.service';

@Injectable({
  providedIn: 'root'
})
export class ReferenceResolverService implements Resolve<Reference>{
  type: any;
  constructor(
    private reference: ReferenceService,
    private referencesData: ReferencesDataService,) { }

  resolve(route: ActivatedRouteSnapshot,state: RouterStateSnapshot) : Observable<Reference> {
    const id = route.paramMap.get('id');

    return this.referencesData.getSpecificId(id)
  }

}

@Injectable({
  providedIn: 'root'
})
export class TechnologyResolverService implements Resolve<Technology>{
  constructor(
    private technology: TechnologyService,
    private technologiesData: TechnologiesDataService,) { }

  resolve(route: ActivatedRouteSnapshot,state: RouterStateSnapshot) : Observable<Technology> {
    const id = route.paramMap.get('id');

    return this.technologiesData.getSpecificId(id)
  }

}

@Injectable({
  providedIn: 'root'
})
export class TopicResolverService implements Resolve<Topic>{
  constructor(
    private topic: TopicService,
    private topicsData: TopicsDataService,) { }

  resolve(route: ActivatedRouteSnapshot,state: RouterStateSnapshot) : Observable<Topic> {
    const id = route.paramMap.get('id');

    return this.topicsData.getSpecificId(id)
  }

}


@Injectable({
  providedIn: 'root'
})
export class TypeDataResolverService implements Resolve<TypeData>{
  type: any;
  constructor(
    private typeData: AdminService,) { }

  resolve(route: ActivatedRouteSnapshot,state: RouterStateSnapshot) : Observable<TypeData> {
    const type = route.paramMap.get('type');
    return this.typeData.getTypeData(type);
  }

}
