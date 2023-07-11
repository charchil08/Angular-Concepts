import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <h1>{{ title }}</h1>
    <h2>App component works!</h2>
    <passenger-dashboard></passenger-dashboard>
  </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;
  name: string;

  constructor() {
    this.title = 'First App';
    this.name = 'Charchil Kajaliya';
  }
}
