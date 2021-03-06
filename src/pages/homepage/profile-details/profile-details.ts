import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccountsProvider } from '../../../providers/accounts/accounts';

/**
 * Generated class for the ProfileDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-details',
  templateUrl: 'profile-details.html',
})
export class ProfileDetailsPage {

  public userDetails: object = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private accProvider: AccountsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileDetailsPage');
  }

  updateProfile(userDetails) {
  	this.accProvider.updateProfile(userDetails)
		.then(
			() => {
				alert('user ingested');
			}
		);
  }

}
