import { Routes,RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HeroComponent } from './hero/hero.component';

export const ROUTES: Routes = [
  { path : '', component: HomeComponent},
  { path : 'home', component: HomeComponent},
  { path : 'hero', component: HeroComponent},
  {
    path: 'onsen', loadChildren: () => System.import('./+onsen').then((comp: any) => {
      return comp.default;
    })
    ,
  },
  { path : 'schedule', component: ScheduleComponent}
]
