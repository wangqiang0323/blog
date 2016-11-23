import { Component, OnInit, Output } from '@angular/core';

import { GridOptions } from 'ag-grid/main';

import { AgRendererComponent } from 'ag-grid-ng2/main';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';

import { HeroService } from './hero.service';
import { Hero } from './hero';
import { NewPersonComponentContext, NewPersonComponent } from './new-person/new-person.component';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.styl'],
  providers: [HeroService,Modal]
})
export class HeroComponent implements OnInit {
  @Output() pagetitle: string
  heroes: Hero[];

  private gridOptions: GridOptions;
  private showGrid: boolean;
  private rowData: any[];
  private columnDefs: any[];
  private rowCount: string;

  constructor(private heroService: HeroService,public modal: Modal) { }

  getHeroes(){
    this.heroService.getHeroes().then((heroes) => {
      this.rowData = heroes.sort((a,b): any => {
        return a.id - b.id
      });
      setTimeout(() => {  
          this.gridOptions.api.sizeColumnsToFit();
        }, 0);
    });
  }

  ngOnInit(){
    this.gridOptions = <GridOptions>{
      onGridReady: (params) => {
        params.api.sizeColumnsToFit();
      }
    };
    this.getHeroes();
    this.createColumnDefs();
    this.showGrid = true;
    this.pagetitle = 'hero';
  }

  search($event): void {
    if ($event.id || $event.name) {
      this.heroService.getHero($event.id, $event.name).then((hero) => {
        this.rowData = [];
        this.rowData.push(hero);
      });
    } else {
      this.getHeroes();
    }

  }

  private createColumnDefs(): void {
    this.columnDefs = [
      { headerName: 'id', field: "id", cellClass: 'grid-align', width: 100 },
      { headerName: 'name', field: "name", cellClass: 'grid-align', width: 100 },
      {
        headerName: 'age', field: "age", cellClass: 'grid-align', width: 100,
        cellClassRules: {
          'rag-green': 'x < 25',
          'rag-amber': 'x >= 25 && x < 60',
          'rag-red': 'x >= 60'
        }
      },
      {
        headerName: "Square Component", field: "id",
        // instead of cellRenderer we use cellRendererFramework
        cellRendererFramework: {
          component: SquareComponent,
        },
        // specify all the other fields as normal
        editable: false, cellStyle: { 'border': 'none' }, cellClass: 'grid-align', colId: "square", width: 50
      }
    ];
  }

  openCustom() {
    return this.modal.open(NewPersonComponent,  overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext)).then(dialog => dialog.result).then(result => {
      console.log(result);
      this.getHeroes();
    });
  }

}


@Component({
  selector: 'square-cell',
  template: `<button type="button" class="btn btn-info btn-sm" (click) = "delete()">删除</button>`,
  providers: [HeroService]
})

class SquareComponent implements AgRendererComponent {
  private params: any;

  agInit(params: any): void {
    this.params = params;
  }

  constructor(private heroService: HeroService) { }

  private valueSquared(): string {
    console.log('this.params.value:' + this.params.value);
    return this.params.value;
  }

  private delete(): void {
    this.heroService.delete(this.params.value).then(() => {
      return this.heroService.getHeroes();
    }).then((heroes) => {
      this.params.api.setRowData(heroes.sort((a,b): any => {
        return a.id - b.id
      }));
    });
  }

}