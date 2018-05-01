import { Component, OnInit } from '@angular/core';
import {} from '';

@Component({
  selector: 'app-installation-samples',
  templateUrl: './installation-samples.component.html',
  styleUrls: ['./installation-samples.component.scss']
})
export class InstallationSamplesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  uploadFile(e) {
      console.log('changed', e.target.files[0]);

  }

}
