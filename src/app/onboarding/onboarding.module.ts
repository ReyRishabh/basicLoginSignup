import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardingComponent } from './onboarding.component';
import { LoginComponent } from './login/login.component';
import { routing } from './onboarding.routing'
import { MatInputModule, MatButtonModule,MatSnackBarModule,MatFormFieldModule,MatIconModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonService } from '../utilities/services/common.service';
import {MatRadioModule} from '@angular/material/radio';
import { SignupComponent } from './signup/signup.component';
import { OnboardingService } from './onboarding.service';


@NgModule({
  imports: [
    CommonModule,
    routing,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatRadioModule,
    MatIconModule
  ],
  declarations: [OnboardingComponent, LoginComponent, SignupComponent],
  providers: [OnboardingService,CommonService]
})
export class OnboardingModule { }
