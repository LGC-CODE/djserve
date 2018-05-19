import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'
declare var $:any;

@Component({
  selector: 'app-installations',
  templateUrl: './installations.component.html',
  styleUrls: ['./installations.component.scss']
})
export class InstallationsComponent implements OnInit {
  public samplesConfig = {
    samples: null,
    selectedImage: ''
  };

  constructor(public firebase_database: AngularFireDatabase) { }

  ngOnInit() {
    let ref = this.firebase_database.database.ref();

    ref.child('installation-photos').once('value', (valSnapshot)=> {
      console.log(Object.values(valSnapshot.val()));
      this.samplesConfig.samples = Object.values(valSnapshot.val());
    });

  }

  openModal(idx: number){
    this.samplesConfig.selectedImage = this.samplesConfig.samples[idx].url;
    $('#exampleModal').modal('show');
  }

}
