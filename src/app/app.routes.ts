import { Routes,RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';

export const ROUTES: Routes = [
  { path : '', component: HomeComponent},
  { path : 'home', component: HomeComponent},
  {
    path: 'onsen', loadChildren: () => System.import('./+onsen').then((comp: any) => {
      return comp.default;
    })
    ,
  },
  { path : 'schedule', component: ScheduleComponent}
]
