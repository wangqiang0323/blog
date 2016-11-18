import { Component, OnInit } from '@angular/core';

import { SideMenuService } from './side-menu.service'
import { SideMenu } from './side-menu'
import { Observable }     from 'rxjs/Observable'

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.styl'],
  providers: [SideMenuService]
})
export class SideMenuComponent implements OnInit {
  errorMessage: string;
  menus: SideMenu[];
  activeStatus: boolean;

  constructor(private SideMenuService: SideMenuService) { }

  ngOnInit() {
    this.getSideMenu();
  }

  getSideMenu():void {
    this.SideMenuService.getSidemenu()
      .subscribe(
      menus => this.menus = menus,
      error => this.errorMessage = <any>error);
  }
  toggleActive(childmenu): void{
    for(let i in this.menus){
      for(let j in this.menus[i].childmenu){
         this.menus[i].childmenu[j].activeStatus = false;
      }
    }
    
  }

}
