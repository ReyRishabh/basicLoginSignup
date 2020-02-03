import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, Route } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
const welcomeRoutes: Routes = [
        {
            path: 'welcome',
            component: WelcomeComponent,
            children: [ 
                {
                    path:'welcome',
                    loadChildren:'./welcome.module#WelcomeModule'
                  },
                  {
                    path: '',
                    redirectTo: 'welcome',
                    pathMatch: 'full'
                  }
            ]
        }
    ];
    
export const welcomeRouting = RouterModule.forChild(welcomeRoutes);
