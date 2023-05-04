import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LetterartComponent } from './letterart/letterart.component';
import { GetDataService } from './services/index';
import { FormsModule } from "@angular/forms";
import { PathLocationStrategy, LocationStrategy } from '@angular/common';
import { CarouselModule } from "ngx-carousel-lib";
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import { WordCutoutComponent } from './word-cutout/word-cutout.component';
import { LazyImgDirective } from './directives/lazy-img.directive';

const appRouts: Routes = [
  { path: '', component: HomeComponent },
  { path: 'custom_framing_ng/:productName', component: HomeComponent },
  { path: 'letterart', component: LetterartComponent },
  { path: '**', component: HomeComponent }
];

export const firebaseConfig = {
  apiKey: "AIzaSyAOQ6ohuYG1N5N-371VplQcYLt-QWQVia0",
  authDomain: "numeric-replica-143220.firebaseapp.com",
  databaseURL: "https://numeric-replica-143220.firebaseio.com",
  projectId: "numeric-replica-143220",
  storageBucket: "atfuseruploads",
  messagingSenderId: "141701202883",
  appId: "1:141701202883:web:bb676dbed65e9a8cc43376"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LetterartComponent,
    WordCutoutComponent,
    LazyImgDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRouts),
    CarouselModule,
    NgxCarouselModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireStorageModule
  ],

  providers: [GetDataService, { provide: LocationStrategy, useClass: PathLocationStrategy }],
  // providers: [GetDataService, DynamicScriptLoaderService, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
