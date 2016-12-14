import { Routes,RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';

export const ROUTES: Routes = [
  { path : '', component: LoginComponent, pathMatch: 'full'},
  {
    path: 'onsen', loadChildren: () => System.import('./+onsen').then((comp: any) => {
      return comp.default;
    })
    ,
  },
  {
    path: 'vkrms', loadChildren: () => System.import('./+vkrms').then((comp: any) => {
      return comp.default;
    })
    ,
  }
]
