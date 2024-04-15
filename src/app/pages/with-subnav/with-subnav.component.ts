import { Component } from '@angular/core';
import { PageRoutingWrapperComponent } from '../../components/page-routing-wrapper/page-routing-wrapper.component';
import { createNavLink, NavLink } from '../../components/nav-wrapper/nav-link.model';
import {
  SubNavWithPageWrapperComponent
} from '../../components/sub-nav-with-page-wrapper/sub-nav-with-page-wrapper.component';

@Component({
  selector: 'app-with-subnav',
  standalone: true,
  imports: [
    PageRoutingWrapperComponent,
    SubNavWithPageWrapperComponent
  ],
  templateUrl: './with-subnav.component.html',
  styleUrl: './with-subnav.component.scss'
})
export class WithSubnavComponent {

  navLinks: NavLink[]

  constructor() {
    this.navLinks = [
      createNavLink('loads-of-detail', 'Loads of Detail'),
      createNavLink('little-detail', 'Little Detail')
    ];
  }

}
