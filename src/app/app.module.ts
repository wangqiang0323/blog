import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { OnsenModule } from 'angular2-onsenui';
import { SelectModule } from 'ng2-select';
import {AgGridModule} from 'ag-grid-ng2/main';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { InMemoryWebApiModule }   from 'angular-in-memory-web-api';
import { InMemoryDataService }    from './in-memory-data.service'

import { ROUTES } from './app.routes';
import { ScheduleComponent } from './schedule/schedule.component';
import { AboutComponent } from './about/about.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HeroComponent } from './hero/hero.component';
import { NewPersonComponent } from './hero/new-person/new-person.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScheduleComponent,
    AboutComponent,
    SideMenuComponent,
    SearchBarComponent,
    HeroComponent,
    NewPersonComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    OnsenModule,
    SelectModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AgGridModule.withNg2ComponentSupport(),
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [],
  entryComponents: [ NewPersonComponent ]
})
export class AppModule { }
