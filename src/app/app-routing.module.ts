import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SlidesComponent } from './views/slides/slides.component';
import { SlideOneComponent } from './views/slides/slide-one/slide-one.component';
import { SlideTwoComponent } from './views/slides/slide-two/slide-two.component';
import { SlideThreeComponent } from './views/slides/slide-three/slide-three.component';
import { SlideFourComponent } from './views/slides/slide-four/slide-four.component';

const routes: Routes = [
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	{path: 'home', component: SlidesComponent, children: [
		{path: '', redirectTo: 'slide-one', pathMatch: 'full'},
		{path: 'slide-one', component: SlideOneComponent},
		{path: 'slide-two', component: SlideTwoComponent},
		{path: 'slide-three', component: SlideThreeComponent},
		{path: 'slide-four', component: SlideFourComponent}
	]}
];

//  const routes: Routes = [
//    {path: '', redirectTo: 'home', pathMatch: 'full'},
//    {path: 'home', component: HomeComponent, children: [
//        {path: '', redirectTo: 'discover', pathMatch: 'full'},
//        {path: 'intro', component: IntroComponent, data: {hideMenu: true}},
//        {path: 'discover', component: DiscoverComponent}
//    ], data: {name: 'Home', icon: 'icon-home'}},
//    {path: 'clinical-overview', component: ClinicalOverviewComponent, data: {name:'Clinical Trials Overview', icon: 'icon-card'}},
//    {path: 'study-locations', component: StudyLocationsComponent,children: [
//        {path: '', redirectTo: 'global', pathMatch: 'full'},
//        {path: 'global', component: GlobalComponent},
//        {path: 'south-america', component: SouthAmericaComponent}
////        {path: 'discover', component: DiscoverComponent, data: {menuToggle: true}}
//    ], data: {name:'Study Locations', icon: 'icon-earth-inverted'}},
//    {path: 'mod-videos', component: ModVideosComponent, data: {name:'Mechanism of Disease Videos', icon: 'icon-play'}}
//  ];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
