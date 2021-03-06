import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AgGridModule } from 'ag-grid-ng2/main';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { ChartModule } from 'angular2-highcharts';

import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HeroComponent } from './hero/hero.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { AboutComponent } from './about/about.component'
import { VkrmsComponent } from './vkrms.component'
import { NewPersonComponent } from './hero/new-person/new-person.component'
import { MyChartComponent } from './my-chart/my-chart.component';

export const routes = [
  {
    path: '', component: VkrmsComponent, children: [
      { path: '', redirectTo: 'home' },
      { path: 'home', component: HomeComponent },
      { path: 'hero', component: HeroComponent },
      { path: 'schedule', component: ScheduleComponent },
      { path: 'chart', component: MyChartComponent }
    ]
  },

]

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    HomeComponent,
    ScheduleComponent,
    HeroComponent,
    AboutComponent,
    SearchBarComponent,
    SideMenuComponent,
    VkrmsComponent,
    NewPersonComponent,
    MyChartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartModule,
    AgGridModule.withNg2ComponentSupport(),
    ModalModule.forRoot(),
    BootstrapModalModule,
    RouterModule.forChild(routes),
  ],
  entryComponents: [NewPersonComponent],
  bootstrap: [VkrmsComponent]
})
export default class VkrmsModule {
  static routes = routes;
}