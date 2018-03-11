import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

	isCollapsed: boolean;

	constructor() { }

	ngOnInit() {
		this.isCollapsed = true;
	}

}
