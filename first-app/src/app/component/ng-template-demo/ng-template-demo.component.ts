import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-template-demo',
  templateUrl: './ng-template-demo.component.html',
  styleUrls: ['./ng-template-demo.component.scss']
})
export class NgTemplateDemoComponent {
  public searchQuery: string;

  constructor() {
    this.searchQuery = '';
  }

  handleChange(event: any): void {
    this.searchQuery = event.target.value;
  }
}
