import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MyOnsenComponent } from './my-onsen.component';
import { TypeComponent } from './type';

console.log('`Detail` bundle loaded asynchronously');
// async components must be named routes for WebpackAsyncRoute
export const routes = [
  { path: '', component: MyOnsenComponent, pathMatch: 'full' },
  { path: 'type', component: TypeComponent}
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    MyOnsenComponent,
    TypeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class MyOnsenModule {
  static routes = routes;
}
