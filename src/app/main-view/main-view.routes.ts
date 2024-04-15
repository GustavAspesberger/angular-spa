import { Route, Routes } from '@angular/router';
import { WITH_SUB_NAV_ROUTES } from '../pages/with-subnav/with-subnav.routes';
import { WITHOUT_SUB_NAV_ROUTES } from '../pages/without-subnav/without-subnav.routes';

const routes: Route[] = [...WITH_SUB_NAV_ROUTES, ...WITHOUT_SUB_NAV_ROUTES];

const MAIN_APPLICATION_ROUTES: Routes = routes;

export { MAIN_APPLICATION_ROUTES };
