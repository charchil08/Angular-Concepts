import { Component } from '@angular/core';
import { INav } from './shared/interface/nav.interface';

@Component({
  selector: 'app-root',
  template: `
    <nav class="nav">
      <a *ngFor="let item of Nav" [routerLink]="item.link" routerLinkActive="active" [routerLinkActiveOptions]="{exact:item.exact}" >{{item.name}}</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  Nav!: INav[];

  constructor() {
    this.Nav = [
      {
        link: '/',
        name: 'Home',
        exact: true
      },
      {
        link: '/passengers',
        name: 'Passengers',
        exact: true
      },
      {
        link: '/oops',
        name: 'OOPS',
        exact: false
      }
    ]
  }
}
