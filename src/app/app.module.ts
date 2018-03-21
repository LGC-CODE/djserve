import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Firebase } from '@ionic-native/firebase';

import { HomePage } from '../pages/homepage/homepage';
import { RegisterPage } from '../pages/homepage/register/register';
import { LoginPage } from '../pages/homepage/login/login';
import { ProfileDetailsPage } from '../pages/homepage/profile-details/profile-details';
import { NavBarComponent} from '../components/nav-bar/nav-bar';
import { StationsPage } from '../pages/stations/stations';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AccountsProvider } from '../providers/accounts/accounts';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
	RegisterPage,
	ProfileDetailsPage,
	LoginPage,
	StationsPage,
	NavBarComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
	HttpModule,
	HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	RegisterPage,
	ProfileDetailsPage,
	LoginPage,
	StationsPage,
	NavBarComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
	AccountsProvider,
	Firebase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
