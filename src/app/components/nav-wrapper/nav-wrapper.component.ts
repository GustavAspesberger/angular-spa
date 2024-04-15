import { Component, Input } from '@angular/core';
import { NavLink } from './nav-link.model';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-nav-wrapper',
  standalone: true,
  imports: [
    MatTabsModule,
    RouterLinkActive,
    RouterLink,
    NgForOf
  ],
  templateUrl: './nav-wrapper.component.html',
  styleUrl: './nav-wrapper.component.scss'
})
export class NavWrapperComponent {
  @Input({ required: true }) navLinks?: NavLink[];
}
