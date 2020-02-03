import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, Route } from '@angular/router';
import { OnboardingComponent } from './onboarding.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const onboardingRoutes: Routes = [
        {
            path: '',
            component: OnboardingComponent,
            children: [ 
                {
                    path: 'sign-in',
                    component: LoginComponent,
                  },
                  {
                    path: 'sign-up',
                    component: SignupComponent
                  },
                  {
                    path: '',
                    redirectTo: 'sign-in',
                    pathMatch: 'full'
                  }
            ]
        }
    ];
    
export const routing: ModuleWithProviders = RouterModule.forChild(onboardingRoutes);
