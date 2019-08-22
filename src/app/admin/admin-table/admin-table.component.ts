import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { AdminService } from '../admin.service';
import { HelperService } from '../../services/helper.service';
import { TypeDataResolverService } from 'src/app/resolvers/admin-resolver.service';

@Component({
  selector: 'admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.scss']
})
export class AdminTableComponent implements OnInit {

  dataTable;
  data;
  header;
  headerKey;
  textButton;
  linkButton;
  tableData;
  
  itemsTable;
  types

  searchType
  dashboardData

  constructor( 
    private adminService : AdminService,
    private helper: HelperService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.getService()
      
      this.getData()
      
      this.setData()
    })
  }
  
  getService() {
    const resolvedData: TypeDataResolverService = this.route.snapshot.data['data']
    let data = resolvedData
  
    this.dashboardData = this.adminService.service[data.type]  
  }

  getData() {
    this.dataTable = this.dashboardData.getDataTable();
    
    this.data = this.dashboardData.getData()
    
    this.itemsTable = this.dashboardData.getItemsTable()
  }
  
  setData() {
    let items = this.helper.filterTable(this.dataTable, this.data.headerKey, this.itemsTable)
    
    let itemsValue = this.helper.setValueElementTable(this.dataTable, items)
    
    this.tableData = this.helper.setTable(this.data.header, this.dataTable, this.data.headerKey, itemsValue)
  }
}
