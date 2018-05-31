import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// Services


//Components


import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './globals/nav-bar/nav-bar.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
	declarations: [
		AppComponent,
		NavBarComponent
	],
	imports: [
		BrowserModule,
		AngularFireModule.initializeApp(environment.firebase, 'universe'),
		AngularFireAuthModule,
		AngularFireStorageModule,
		AngularFireDatabaseModule,
		AppRoutingModule,
		HttpClientModule,
		NgbModule
	],
	providers: [
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
