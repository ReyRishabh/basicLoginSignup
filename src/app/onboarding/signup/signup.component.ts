import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonValidator } from 'src/app/utilities/validators/common.validators';
import { CommonService } from '../../utilities/services/common.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OnboardingService } from '../onboarding.service';
import { BaThemeSpinner } from '../../utilities/services/baThemeSpinner.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @ViewChild('password', { static: false }) public passwordElement: any;
  public SignUp: FormGroup;
  constructor(private fb: FormBuilder, public commonService: CommonService,
    private matSnackBar: MatSnackBar,  private onboardService:OnboardingService,
    private loader: BaThemeSpinner, private router: Router) {
  }
  ngOnInit() {
    this.SignUp = this.fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'email': ['', Validators.compose([Validators.required, CommonValidator.email])],
      'password': ['', Validators.compose([Validators.required])]
    });

  }

  onSubmit(formValues) {
    const payload= {
      'name':formValues.name,
      'email':formValues.email,
      'password':formValues.password
    }
    this.onboardService.signUp(payload).subscribe(
      (response: any) => {
        // this.loader.hide();
         if(response) { 
          this.router.navigate(['welcome']);
        }
          this.matSnackBar.open('Registered Successfully', response.message, {
            duration: 1000,
          });
    
        }, error => {
          // this.loader.hide();
          this.matSnackBar.open(error.error.message, '', {
            duration: 2000,
          });
        });
  }
}
