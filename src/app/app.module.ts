import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/homepage/homepage';
import { RegisterPage } from '../pages/homepage/register/register';
import { ProfileDetailsPage } from '../pages/homepage/profile-details/profile-details';
import { NavBarComponent} from '../components/nav-bar/nav-bar';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
	RegisterPage,
	ProfileDetailsPage,
	NavBarComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	RegisterPage,
	ProfileDetailsPage,
	NavBarComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
