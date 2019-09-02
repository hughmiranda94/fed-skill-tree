import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';
import { HelperService } from '../../services/helper.service';
import {
  ReferenceResolverService,
  TypeDataResolverService,
  TechnologyResolverService,
  TopicResolverService
} from 'src/app/admin/resolvers/admin-resolver.service';

@Component({
  selector: 'admin-crud',
  templateUrl: './admin-crud.component.html',
  styleUrls: ['./admin-crud.component.scss']
})
export class AdminCrudComponent implements OnInit {

  inputT;
  inputTA
  inputD
  inputTags
  inputDropTables
  searchId
  searchType
  data
  service
  edit
  editInfo = {
    inputs: [],
    data: {}
  }
  tagInfo

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private helper: HelperService,
    private adminService : AdminService,
  ) {
  }

  ngOnInit() {
    this.setService()

    this.setInputDrop()

    this.inputT = this.service.getTextFormat()
    this.inputTA = this.service.getTextAreaFormat()
    this.inputTags = this.service.getTagFormat()

    this.inputD = this.inputD.concat(this.inputDropTables)

    this.inputTags.map(item => {
      item.list = this.helper.dropdownArray(item.list, item.list)

      return item
    })

    if(this.edit) this.editData()
    }

  editData() {
    this.editInfo['inputs'] = this.inputT.concat(this.inputD).concat(this.inputTA)
    this.editInfo['data'] = this.service.getDataEdit()

    this.tagInfo = []

    this.tagInfo = this.inputTags.map(item => {
      let list = new Array(this.service[item.key].length)
      list = this.service[item.key].map(item=>item)

      return {
        list: list,
        label: item.label
      }
    })
  }

  setService() {
    const resolvedDataType: TypeDataResolverService = this.route.snapshot.data['type']
    let data = resolvedDataType

    this.typeData(data)

    this.service = this.adminService.service[data.type]
    this.data = this.adminService.data[data.type]

    this.service.setValues({})

    this.inputDropTables = this.service.oterTableDrop()

    if(this.searchId) {
      this.edit = true


      this.service.setValues(this.searchId)

      this.dropRelation()

    }
  }

  typeData(data) {
    switch (data.type) {
      case 'technologies':
        const dataTechnology: TechnologyResolverService = this.route.snapshot.data['dataTechnology']
        this.searchId = dataTechnology
        break;
      case 'topics':
        const dataTopic: TopicResolverService = this.route.snapshot.data['dataTopic']
        this.searchId = dataTopic
        break;
      case 'references':
        const dataReference: ReferenceResolverService = this.route.snapshot.data['dataReference']
        this.searchId = dataReference
        break;
      }
  }

  checkDrop(drops, itemDrop, find) {
    return drops = drops.map(item => {
      if(item.showFrom && itemDrop.model === item.showFrom.model) {
        item = this.setDrop(item, find)
        this.service[item.model] = ''
      }

      return item
    })
  }

  setDrop(item, find) {
    let table = {}

    table = this.adminService.getTableJoin(item.showFrom.table)

    item.list = this.service.getListJoin(table, find)

    item.disabled = !!find.empty

    return item
  }


  dropRelation() {
    let table

    this.inputDropTables.map(dependItem => {
      if(!!dependItem.showFrom) {
        table = this.adminService.getJoinByModel(dependItem.showFrom.model)

        let model = this.adminService.data[table.tableData].getSpecificId(this.service[dependItem.model])
        this.service[table.joinId] = model[table.joinId]

        dependItem = this.setDrop(dependItem, this.service[table.joinId])
      }

      return dependItem
    })
  }

  setInputDrop() {
    this.inputD = this.service.getDropFormat()

    this.inputD.map(item => {
      item.list = this.data.getSpecificData(item.keys)

      if(item.keys.length == 1) {
        item.list = this.helper.setFilterType(item.list, item.keys)
        item.list = this.helper.dropdownArray(item.list, item.list)
      }
      else
        item.list = this.helper.dropdownObjectToArray(item.list, item.keys[0], item.keys[1])

      return item
    })
  }

  setVlueTag(type, value) {
    this.service.setValues({[type]: value})
  }

  setVlue(data, element) {
    if(element.empty) {
      this.inputD = this.checkDrop(this.inputD, data, element)
      this.service.setValues({[data.model]: null})
    }
    else {
      this.inputD = this.checkDrop(this.inputD, data, element.value)
      this.service.setValues({[data.model]: element.value})
    }
  }



  save($event) {
    if($event.clientX !== 0) {
      let dataForm = this.service.getDataS()
    }
  }

  cancel($event) {
    if($event.clientX !== 0) {
      this.router.navigate(['./technologies/table'])
    }
  }

  saveCreate($event) {
    if($event.clientX !== 0) {
      this.router.navigate(['./technologies/table'])
    }
  }
}
