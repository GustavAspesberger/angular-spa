import { Component, Input } from '@angular/core';
import { NavWrapperComponent } from '../nav-wrapper/nav-wrapper.component';
import { PageRoutingWrapperComponent } from '../page-routing-wrapper/page-routing-wrapper.component';
import { NavLink } from '../nav-wrapper/nav-link.model';

@Component({
  selector: 'app-sub-nav-with-page-wrapper',
  standalone: true,
  imports: [
    NavWrapperComponent,
    PageRoutingWrapperComponent
  ],
  templateUrl: './sub-nav-with-page-wrapper.component.html',
  styleUrl: './sub-nav-with-page-wrapper.component.scss'
})
export class SubNavWithPageWrapperComponent {
  @Input({ required: true }) navLinks?: NavLink[];

}
