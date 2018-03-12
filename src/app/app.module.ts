import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';

// Services
import { ArticlesService } from './services/articles.service';

import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './globals/nav-bar/nav-bar.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		NavBarComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		NgbModule
	],
	providers: [
		ArticlesService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
