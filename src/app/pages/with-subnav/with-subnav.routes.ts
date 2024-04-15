import { WithSubnavComponent } from './with-subnav.component';
import { LittleDetailComponent } from './little-detail/little-detail.component';
import { Routes } from '@angular/router';
import { LoadsOfDetailComponent } from './loads-of-detail/loads-of-detail.component';

export const WITH_SUB_NAV_ROUTES: Routes = [
  {
    path: 'with-sub-nav',
    component: WithSubnavComponent,
    children: [
      { path: 'loads-of-detail', component: LoadsOfDetailComponent },
      { path: 'little-detail', component: LittleDetailComponent }
    ]
  }
];
