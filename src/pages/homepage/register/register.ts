import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileDetailsPage } from '../profile-details/profile-details';
import { FormsModule } from '@angular/forms';
import { AccountsProvider } from '../../../providers/accounts/accounts';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [AccountsProvider]
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private accProvider: AccountsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerEmail(email, psw, confirmPsw){
  	if(psw && psw === confirmPsw){
  		this.accProvider.registerWithEmail(email, psw);
	}
  }

}
