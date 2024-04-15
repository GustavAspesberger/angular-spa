import { Component } from '@angular/core';
import { createNavLink, NavLink } from '../components/nav-wrapper/nav-link.model';
import { TitleComponent } from './title/title.component';
import { NavWrapperComponent } from '../components/nav-wrapper/nav-wrapper.component';
import { PageRoutingWrapperComponent } from '../components/page-routing-wrapper/page-routing-wrapper.component';
import { RoutingWrapperComponent } from '../components/routing-wrapper/routing-wrapper.component';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [
    TitleComponent,
    NavWrapperComponent,
    PageRoutingWrapperComponent,
    RoutingWrapperComponent
  ],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss'
})
export class MainViewComponent {

  mainNav: NavLink[]

  constructor() {
    this.mainNav = [
      createNavLink('/main/with-sub-nav', 'With Sub Nav'),
      createNavLink('/main/without-sub-nav', 'Without Sub Nav')
    ];
  }
}
