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

@NgModule({
  declarations: [
    AppComponent,
    HeaderInfoComponent,
    ArrowsNavComponent,
    HomeComponent,
    CommonContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
