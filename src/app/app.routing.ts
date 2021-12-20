import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {ResumeComponent} from './resume/resume.component';
import {ContactComponent} from './contact/contact.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about-me',
    component: AboutMeComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
