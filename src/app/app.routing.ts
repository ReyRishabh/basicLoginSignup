import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, Route } from '@angular/router';
import { AuthGuard } from './utilities/route-guards/auth-guard';


const appRoutes: Routes = [
  {
    path: 'app',
    loadChildren: './onboarding/onboarding.module#OnboardingModule',
    data: { preload: false }
  },
  {
    path: '',
   redirectTo:'app',
   pathMatch:'full'
  },
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);