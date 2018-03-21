import { Component, Input, OnInit } from '@angular/core';

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
export class NavBarComponent implements OnInit {

  @Input() navTitle;

  public title;
  constructor() {

  }

  ngOnInit() {
  	console.log('title: ', this.navTitle);
    this.title = this.navTitle;
  }



}
