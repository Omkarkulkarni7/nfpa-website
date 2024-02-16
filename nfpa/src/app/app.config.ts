import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';

const firebaseConfig = {
  "projectId":"nfpa-website",
  "appId":"1:422315818436:web:23f14dc0ee08ecb9b1f891",
  "storageBucket":"nfpa-website.appspot.com",
  "apiKey":"AIzaSyBvvfbeETJ0T7kagGRn0-Rm2MmilB5deQ0",
  "authDomain":"nfpa-website.firebaseapp.com",
  "messagingSenderId":"422315818436",
  "measurementId":"G-F4RHGERTHV"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(), 
    importProvidersFrom(provideFirebaseApp(() => initializeApp(firebaseConfig))), 
    importProvidersFrom(provideAuth(() => getAuth())), 
    importProvidersFrom(provideAnalytics(() => getAnalytics())), 
    ScreenTrackingService, 
    UserTrackingService, 
    importProvidersFrom(provideFirestore(() => getFirestore())), 
    importProvidersFrom(provideDatabase(() => getDatabase())), 
    importProvidersFrom(provideFunctions(() => getFunctions())), 
    importProvidersFrom(provideMessaging(() => getMessaging())), 
    importProvidersFrom(providePerformance(() => getPerformance())), 
    importProvidersFrom(provideStorage(() => getStorage())), 
    importProvidersFrom(provideRemoteConfig(() => getRemoteConfig()))
  ]
};
