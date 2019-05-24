import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'memoryleak';
  isActive = true;

  constructor() {}

  public toggle() {
    this.isActive = !this.isActive;
  }
}
