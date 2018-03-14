import { Component } from '@angular/core';

/**
 * Generated class for the AudioPlayerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'audio-player',
  templateUrl: 'audio-player.html'
})
export class AudioPlayerComponent {

  text: string;

  constructor() {
    console.log('Hello AudioPlayerComponent Component');
    this.text = 'Hello World';
  }

}
