import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getFunctions, provideFunctions } from '@angular/fire/functions';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding()), 
    provideAnimationsAsync(), 
    importProvidersFrom(
      provideFirebaseApp(() => 
        initializeApp({
          "projectId":"fir-demo-app-210f8",
          "appId":"1:258607751104:web:7395989837990a9f5ff225",
          "storageBucket":"fir-demo-app-210f8.appspot.com",
          "apiKey":"AIzaSyCzeJ6PU4Y6CtkTfmNT_OQiCBrN4ugepiA",
          "authDomain":"fir-demo-app-210f8.firebaseapp.com",
          "messagingSenderId":"258607751104",
          "measurementId":"G-5KS9MCPTL4"}))), 
        importProvidersFrom(
          provideAuth(() => getAuth())), 
        importProvidersFrom(
          provideFirestore(() => getFirestore())), 
        importProvidersFrom(
          provideFunctions(() => getFunctions()))]
};
