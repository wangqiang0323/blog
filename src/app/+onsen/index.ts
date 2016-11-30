import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MyOnsenComponent } from './my-onsen.component';
import { TypeComponent } from './type';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';

console.log('`Detail` bundle loaded asynchronously');
// async components must be named routes for WebpackAsyncRoute
export const routes = [
  {
    path: '', component: MyOnsenComponent,children: [
      { path: '', redirectTo: 'type' },
      { path: 'type', component: TypeComponent },
      { path: 'home',component: HomeComponent,}
    ]
  },
  { path: 'blog',component: BlogComponent,}
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    MyOnsenComponent,
    TypeComponent,
    HomeComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  bootstrap: [MyOnsenComponent],
  entryComponents: [MyOnsenComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export default class MyOnsenModule {
  static routes = routes;
}
