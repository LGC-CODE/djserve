import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';

// Services
import { ArticlesService } from './services/articles.service';

import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './globals/nav-bar/nav-bar.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ArticleComponent } from './views/article/article.component';
import { WorkSamplesUploadsComponent } from './views/content-management/work-samples-uploads/work-samples-uploads.component';
import { InstallationSamplesComponent } from './views/content-management/work-samples-uploads/installation-samples/installation-samples.component';



@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		NavBarComponent,
		ArticleComponent,
		WorkSamplesUploadsComponent,
		InstallationSamplesComponent
	],
	imports: [
		BrowserModule,
		AngularFireModule.initializeApp(environment.firebase, 'universe'),
		AngularFireAuthModule,
		AngularFireStorageModule,
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
