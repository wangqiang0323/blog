import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { OnsenModule } from 'angular2-onsenui';
import { SelectModule } from 'ng2-select';
import { AgGridModule } from 'ag-grid-ng2/main';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service'

import { ROUTES } from './app.routes';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
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
  entryComponents: []
})
export class AppModule { }
