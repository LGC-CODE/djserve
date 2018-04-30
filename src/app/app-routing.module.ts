import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ArticleComponent } from './views/article/article.component';
import { WorkSamplesUploadsComponent } from './views/content-management/work-samples-uploads/work-samples-uploads.component';
import { InstallationSamplesComponent } from './views/content-management/work-samples-uploads/installation-samples/installation-samples.component';

const routes: Routes = [
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	{path: 'home', component: HomeComponent},
	{path: 'article', component: ArticleComponent},
	{path: 'content-management', component: WorkSamplesUploadsComponent, children: [
		{path: 'installation-samples', component: InstallationSamplesComponent}
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
