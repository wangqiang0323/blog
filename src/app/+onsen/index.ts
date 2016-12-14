import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MyOnsenComponent } from './my-onsen.component';
import { TypeComponent } from './page/type';
import { HomeComponent } from './page/home';
import { BlogComponent } from './page/blog';
import { LoginComponent } from './page/login';

console.log('`Detail` bundle loaded asynchronously');
// async components must be named routes for WebpackAsyncRoute
export const routes = [
  {
    path: '', component: MyOnsenComponent, children: [
      { path: '', redirectTo: 'login' },
      { path: 'login', component: LoginComponent, }
    ]
  },
  {
    path: 'type', component: TypeComponent
  },
  { path: 'login', component: LoginComponent, },
  { path: 'home', component: HomeComponent, },
  { path: 'blog', component: BlogComponent, }
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    MyOnsenComponent,
    TypeComponent,
    HomeComponent,
    BlogComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  bootstrap: [],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export default class MyOnsenModule {
  static routes = routes;
}
