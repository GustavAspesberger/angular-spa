import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainViewComponent } from './main-view/main-view.component';
import { PageRoutingWrapperComponent } from './components/page-routing-wrapper/page-routing-wrapper.component';
import { RoutingWrapperComponent } from './components/routing-wrapper/routing-wrapper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainViewComponent, PageRoutingWrapperComponent, RoutingWrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular';
}
