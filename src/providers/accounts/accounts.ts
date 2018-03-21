import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as Firebase from 'firebase';
/*
  Generated class for the AccountsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AccountsProvider {

  public accountsInit: object = {};

  public accountsConfig = new BehaviorSubject<any>(this.accountsInit);

  constructor(public http: HttpClient) {
    console.log('Hello Accou gffffffffrffrffntsProvider Provider', Firebase);
  }

  registerWithEmail(email, password){
  	Firebase.auth().setPersistence(Firebase.auth.Auth.Persistence.LOCAL)
		.then(()=>{
			Firebase.auth().createUserWithEmailAndPassword(email, password);
		}).catch(
			err => {
				throw new Error(err);
			}
		)
  }

  loginWithEmail(email, password){
  	Firebase.auth().setPersistence(Firebase.auth.Auth.Persistence.LOCAL)
		.then(
			()=>{
				Firebase.auth().signInWithEmailAndPassword(email, password)
						.then(user => {
							this.accountsConfig.next(user);
						});

			}
		).catch(
			err => {
				throw new Error(err);
			}
		)
  }

  updateProfile(userDetails) {
  	return Firebase.auth().currentUser.updateProfile(userDetails)
		.then(
			() => {
				alert('user updated');
				this.accountsConfig.next(Firebase.auth().currentUser);
			}
		);
	  //console.log(userDetails, 'accessed');
  }

  getAccountsConfig(): Observable<any> {
	return this.accountsConfig.asObservable();
  }

  setAccountsConfig(newConfig: any) {
	this.accountsConfig.next(newConfig);
  }

}
