import { Route } from '@angular/router';
import { MainViewComponent } from './main-view/main-view.component';

export const APP_ROUTES: Route[] = [
  {
    path: 'main',
    component: MainViewComponent,
    loadChildren: () => import('./main-view/main-view.routes').then(m => m.MAIN_APPLICATION_ROUTES)
  },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  }
];
