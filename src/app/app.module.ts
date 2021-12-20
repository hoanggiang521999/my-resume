import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { HeaderInfoComponent } from './header-info/header-info.component';
import { ArrowsNavComponent } from './arrows-nav/arrows-nav.component';
import { HomeComponent } from './home/home.component';
import { CommonContentComponent } from './common-content/common-content.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderInfoComponent,
    ArrowsNavComponent,
    HomeComponent,
    CommonContentComponent,
    AboutMeComponent,
    ResumeComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
