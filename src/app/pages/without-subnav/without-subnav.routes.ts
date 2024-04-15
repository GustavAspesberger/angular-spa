import { Routes } from '@angular/router';
import { WithoutSubnavComponent } from './without-subnav.component';
import { DetailComponent } from './detail/detail.component';

export const WITHOUT_SUB_NAV_ROUTES: Routes = [
  {
    path: 'without-sub-nav',
    component: WithoutSubnavComponent,
    children: [
      { path: '', redirectTo: 'detail', pathMatch: 'full'},
      { path: 'detail', component: DetailComponent }
    ]
  }
];
