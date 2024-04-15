import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-page-routing-wrapper',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet></router-outlet>',
  styleUrl: './page-routing-wrapper.component.scss'
})
export class PageRoutingWrapperComponent {

}
