import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from  'rxjs/Observable';
import { merge } from 'rxjs/observable/merge';
import * as firebase from 'firebase/app';
import { from } from 'rxjs/observable/from';

@Component({
  selector: 'app-installation-samples',
  templateUrl: './installation-samples.component.html',
  styleUrls: ['./installation-samples.component.scss']
})
export class InstallationSamplesComponent implements OnInit {
  public installationImageCollection;

  constructor(private firebase_storage: AngularFireStorage, public afAuth: AngularFireAuth, public firebase_database: AngularFireDatabase) { }

  ngOnInit() {
    
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }

  uploadFile(e) {
    console.log(e.target.files);

    let fileSuccessfulCount: number = 1;
    let fileTotalCount: number;

    this.getFiles(e.target.files).subscribe(
      filesSubs => {
        filesSubs.subscribe(
          filePromise => {
          var filename = filePromise.snapshot.ref.name.split(/[ ]|\./).join('-');
          var title = prompt(`Titulo de Foto para: \n ${filePromise.snapshot.ref.name}`);
          var url = filePromise.snapshot.downloadURL;
          fileTotalCount = filePromise.fileCount;

            this.writeUserData(filename, title, url);
            console.log(filePromise);

          }, (err) => {
            throw new err;
          }, () => {
            if(fileSuccessfulCount === fileTotalCount){
              alert('Todo se subio exitosamente.')
              e.target.value = null;
            } else {
              fileSuccessfulCount++;
            }
            
            console.log('finished!');
          }
        );
      }
    );

      // for(var file in e.target.files){)
      //   console.log(e.target.files);
        // var singleFile = e.target.files[file];
        // if(!singleFile.name) break;
        // var path = `/instalations/${ singleFile.name }`;
        // var title = prompt(`Titulo de Foto para: \n ${singleFile.name}`);
        // var name = singleFile.name;
        // // console.log('changed', singleFile);
        // if(title){
        //   var upload = this.firebase_storage.upload(path, singleFile).downloadURL().subscribe(
        //     url => {
        //       console.log('saved', name);
        //       this.writeUserData(name.split(/[ ]|\./).join('-'), url, title);
        //     }
        //   );
        // } else {
        //   alert('Cancelando... Titulo no fue escrito.');
        // }
      // }
    // e.target.value = '';
  }

  writeUserData(filename, title, imageUrl) {
    return this.firebase_database.database.ref('installation-photos/' + filename).set({
      name: filename,
      title: title,
      url: imageUrl,
      date: new Date().toLocaleString('en')
    });
  }

  getFiles(files) {  // reference : https://stackoverflow.com/a/45038305/3161709
      let trialsObservable:Observable<any>[] = [];
      var path;
      files = Object.values(files);
      console.log(files);



      for(let i in files){
          path = `/instalations/${ files[i].name }`;
          trialsObservable.push(from(this.firebase_storage.upload(path, files[i]).then(s=>{
            return {snapshot: s, fileCount: files.length};
          })));
      }

      return merge(trialsObservable);
  }

}
