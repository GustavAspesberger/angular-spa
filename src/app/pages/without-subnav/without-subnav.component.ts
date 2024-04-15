import { Component } from '@angular/core';
import { DetailComponent } from './detail/detail.component';
import { PageRoutingWrapperComponent } from '../../components/page-routing-wrapper/page-routing-wrapper.component';

@Component({
  selector: 'app-without-subnav',
  standalone: true,
  imports: [
    DetailComponent,
    PageRoutingWrapperComponent
  ],
  templateUrl: './without-subnav.component.html',
  styleUrl: './without-subnav.component.scss'
})
export class WithoutSubnavComponent {

}
