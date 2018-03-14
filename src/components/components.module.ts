import { NgModule } from '@angular/core';
import { AudioPlayerComponent } from './audio-player/audio-player';
import { NavBarComponent } from './nav-bar/nav-bar';
@NgModule({
	declarations: [AudioPlayerComponent,
    NavBarComponent],
	imports: [],
	exports: [AudioPlayerComponent,
    NavBarComponent]
})
export class ComponentsModule {}
