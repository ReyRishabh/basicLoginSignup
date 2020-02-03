import { Component, OnInit } from '@angular/core';
import {
    FormGroup,
    AbstractControl,
    FormBuilder,
    Validators,
    FormControl
} from '@angular/forms';
import { OnboardingService } from '../onboarding.service';
import { Subscription } from 'rxjs';
import { CommonValidator } from '../../utilities/validators/common.validators';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BaThemeSpinner } from '../../utilities/services/baThemeSpinner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  login_sub: Subscription;

ngOnInit()
{
  this.form = this.fb.group({
    'email': ['', Validators.compose([Validators.required, CommonValidator.email])],
    'password': ['', Validators.compose([Validators.required])],
  });   
}
  constructor(private fb: FormBuilder,private onboardService :OnboardingService,private router:Router,
    private matSnackBar: MatSnackBar, private loader: BaThemeSpinner) {

  }

  onSubmit(values, event) {
    // this.loader.show();
      event.preventDefault();
      if (this.form.valid) {
          const payload = {
              email: values.email,
              password: values.password,
          };
          this.login_sub = this.onboardService.login(payload).subscribe(
          (response: any) => {
            // this.loader.hide();
            console.log(response,'///')
             if(response) { 
               localStorage.setItem('accessToken',response.token);
               this.router.navigate(['welcome']);
            }
            }, error => {
              // this.loader.hide();
              this.matSnackBar.open('invalid credentials', 'error', {
                duration: 2000,
              });
            });
         
      } else {
      }
  }


}
