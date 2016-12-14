import { Component, OnInit, Output } from '@angular/core';
import { GridOptions } from 'ag-grid/main'
import RefData from './refData';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.styl']
})
export class ScheduleComponent implements OnInit {
  @Output() CustomOption

  private gridOptions: GridOptions;
  private showGrid: boolean;
  private rowData: any[];
  private columnDefs: any[];
  private rowCount: string;


  constructor() {
    this.gridOptions = <GridOptions>{};
    this.createRowData();
    this.createColumnDefs();
    this.showGrid = true;
    this.gridOptions = {
      onGridReady: () => {
        // this.gridOptions.api.sizeColumnsToFit();
      }
    }
  }

  public search(): void {
    console.log('search');
  }

  private createRowData() {
    var rowData: any[] = [];

    for (var i = 0; i < 100; i++) {
      var countryData = RefData.countries[i % RefData.countries.length];
      rowData.push({
        name: RefData.firstNames[i % RefData.firstNames.length] + ' ' + RefData.lastNames[i % RefData.lastNames.length],
        address: RefData.addresses[i % RefData.addresses.length],
        country: countryData.country,
        mobile: this.createRandomPhoneNumber(),
        landline: this.createRandomPhoneNumber()
      });
    }

    this.rowData = rowData;
  }

  private createColumnDefs() {
    this.columnDefs = [
      {
        headerName: '#', width: 30, checkboxSelection: true, suppressSorting: true,
        suppressMenu: true, pinned: true
      },
      {
        headerName: 'Employee',
        children: [
          {
            headerName: "Name", field: "name",
            width: 250, pinned: true, editable: true
          },
          {
            headerName: "Country", field: "country", width: 250, pinned: true
          },
        ]
      },
      {
        headerName: 'Contact',
        children: [
          { headerName: "Mobile", field: "mobile", width: 250, filter: 'text' },
          { headerName: "Land-line", field: "landline", width: 250, filter: 'text' },
          { headerName: "Address", field: "address", width: 600, filter: 'text' }
        ]
      }
    ];
  }

  ngOnInit() {
    this.CustomOption = {
      "pagetitle": "schedule",
      "subtitle": "https://www.ag-grid.com/example.php",
      "multiple": false
    }

  }

  createRandomPhoneNumber(): String {
    let result = '+';
    for (let i = 0; i < 12; i++) {
      result += Math.round(Math.random() * 10);
      if (i === 2 || i === 5 || i === 8) {
        result += ' ';
      }
    }
    return result;
  }

}

