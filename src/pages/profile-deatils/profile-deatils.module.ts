import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileDeatilsPage } from './profile-deatils';

@NgModule({
  declarations: [
    ProfileDeatilsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileDeatilsPage),
  ],
})
export class ProfileDeatilsPageModule {}
