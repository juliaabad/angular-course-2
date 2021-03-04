import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Componente1Component } from './components/componente1/componente1.component';

const firebaseConfig = {
  apiKey: "AIzaSyCuSe-4yl_zWDdbMws1jUFjpIq39mHjZIs",
  authDomain: "angular-course-bed39.firebaseapp.com",
  projectId: "angular-course-bed39",
  storageBucket: "angular-course-bed39.appspot.com",
  messagingSenderId: "879727463548",
  appId: "1:879727463548:web:dc28f6b9a1e1c1badacdf9",
  measurementId: "G-5TQ57ZQ618"
};

@NgModule({
  imports: [
    BrowserModule,
    // 3. Initialize
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  declarations: [ AppComponent, Componente1Component ],
  bootstrap: [ AppComponent ]
})

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
