import { Component } from '@angular/core';

/**
 * Generated class for the NavBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'nav-bar',
  templateUrl: 'nav-bar.html'
})
export class NavBarComponent {

  text: string;

  constructor() {
    console.log('Hello NavBarComponent Component');
    this.text = 'Hello World';
  }

}
