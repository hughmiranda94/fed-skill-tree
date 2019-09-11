import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { AdminService } from '../admin.service';
import { HelperService } from '../../services/helper.service';
import { TypeDataResolverService } from 'src/app/admin/resolvers/admin-resolver.service';
import { Observable } from 'rxjs';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.scss']
})
export class AdminTableComponent implements OnInit {

  public dataTable;
  public data;
  public header;
  public headerKey;
  public textButton;
  public linkButton;
  public tableData;
  public itemsTable;
  public types;
  public searchType;
  public dashboardData;
  public isNightMode$: Observable<boolean>;

  constructor(
    private adminService : AdminService,
    private helper: HelperService,
    private route: ActivatedRoute,
    private settingsService: SettingsService
  ) {
    this.isNightMode$ = this.settingsService.isNightMode();
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.getService();
      this.getData();
      this.setData();
    });
  }

  getService() {
    const resolvedData: TypeDataResolverService = this.route.snapshot.data['data'];
    this.dashboardData = this.adminService.service[resolvedData.type];
  }

  getData() {
    this.dataTable = this.dashboardData.getDataTable();
    this.data = this.dashboardData.getData();
    this.itemsTable = this.dashboardData.getItemsTable();
  }

  setData() {
    const items = this.helper.filterTable(this.dataTable, this.data.headerKey, this.itemsTable);
    const itemsValue = this.helper.setValueElementTable(this.dataTable, items);
    this.tableData = this.helper.setTable(this.data.header, this.dataTable, this.data.headerKey, itemsValue);
  }

  actionTable(event) {
    console.log(event);
  }
}
