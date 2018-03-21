import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HomePage } from '../pages/homepage/homepage';
import { RegisterPage } from '../pages/homepage/register/register';
import { LoginPage } from '../pages/homepage/login/login';
import { ProfileDetailsPage } from '../pages/homepage/profile-details/profile-details';
import { AccountsProvider } from '../providers/accounts/accounts';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as Firebase from 'firebase';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HomePage;
  pages: Array<{type: string, title: string, component: any}>;
  user: any;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
	public accProvider: AccountsProvider
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

	  const config = {
		apiKey: "AIzaSyDWRpcXnmW3lYKT0IiK6-JTTU_qhrdUSuc",
		authDomain: "djserve-731a5.firebaseapp.com",
		databaseURL: "https://djserve-731a5.firebaseio.com",
		projectId: "djserve-731a5",
		storageBucket: "djserve-731a5.appspot.com",
		messagingSenderId: "762157094288"
	  };

	  Firebase.initializeApp(config);

      this.accProvider.getAccountsConfig().subscribe(
			accConfig => {
				this.user = accConfig;
				this.getCurrentUser();
			}
	   )

	   Firebase.auth().onAuthStateChanged(
	   		user => {
				this.accProvider.setAccountsConfig(user);
			}
	   );
    });
  }

  openPage(page) {

  	if(page.type === 'user'){
		return;
	} else if(page.type === 'logout') {
		Firebase.auth().signOut().then(
			() => {
				alert('user was logged out');
				this.accProvider.setAccountsConfig({});
			}
		);
	} else {
		// close the menu when clicking a link from the menu
		this.menu.close();
		// navigate to the new page if it is not the current page
		this.nav.setRoot(page.component);
	}
  }

  getCurrentUser(){
	console.log(this.user);
	if(this.user){
		let displayName = this.user.displayName ? this.user.displayName : 'Crea tu Apodo';

		let accounts = [
			{ type: 'user', title: displayName, component: null },
			{ type: '', title: 'RadioLite', component: HomePage },
      		{ type: '', title: 'Profile Details', component: ProfileDetailsPage },
			{ type: 'logout', title: 'Logout', component: null }
		];

		this.pages = accounts;
	} else {
		let accounts = [
			{ type: '', title: 'RadioLite', component: HomePage },
			{ type: '', title: 'Register', component: RegisterPage },
      		{ type: '', title: 'Login', component: LoginPage }
		];

		this.pages = accounts;
	}
  }

}
