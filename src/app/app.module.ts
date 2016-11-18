import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { OnsenModule } from 'angular2-onsenui';

import { ROUTES } from './app.routes';
import { ScheduleComponent } from './schedule/schedule.component';
import { AboutComponent } from './about/about.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScheduleComponent,
    AboutComponent,
    SideMenuComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    OnsenModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule { }
