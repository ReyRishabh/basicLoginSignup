import { BrowserModule } from '@angular/platform-browser';
import { NgModule,APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatSnackBarModule } from '../../node_modules/@angular/material';
import { BaThemeSpinner } from './utilities/services/baThemeSpinner.service';
import { CommonService } from './utilities/services/common.service';
import { AuthGuard } from './utilities/route-guards/auth-guard';
// import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { WelcomeComponent } from './modules/welcome/welcome.component';
import { OnboardingModule } from './onboarding/onboarding.module';
import { WelcomeModule } from './modules/welcome/welcome.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    OnboardingModule,
    WelcomeModule,
    routing,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },	
    CommonService,	
    AuthGuard,
    BaThemeSpinner
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
