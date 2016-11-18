import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AboutComponent } from './about/about.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { VkrmsComponent } from './vkrms.component';

console.log('`Detail` bundle loaded asynchronously');
// async components must be named routes for WebpackAsyncRoute
export const routes = [
  { path: '', component: VkrmsComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'schedule', component: ScheduleComponent}
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    VkrmsComponent,
    HomeComponent,
    ScheduleComponent,
    AboutComponent,
    SideMenuComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild(routes),
  ]
})
export default class MyOnsenModule {
  static routes = routes;
}
