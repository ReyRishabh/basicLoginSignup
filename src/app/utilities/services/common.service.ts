import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl, FormArray, ValidatorFn, ValidationErrors } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CommonService {
  private sendDataSource = new BehaviorSubject({});
  sendDataFunc = this.sendDataSource.asObservable();
  constructor(public router: Router, public matSnackBar: MatSnackBar, private http: HttpClient) { }
  public checkLoggedIn() {
    if (localStorage.getItem('accessToken')){
      return true;}
    else{
      return false;
    }
  }
  public validateAllFormFields(form: FormGroup) {
    let keys = Object.keys(form.controls);
    keys.forEach((field: any) => {
      const control = form.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
        control.markAsDirty({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
      else if (control instanceof FormArray) {
        (<FormArray>control).controls.forEach((element: FormGroup) => {
          this.validateAllFormFields(element);
        });
      }
    });
  }
  logout() {
    window.localStorage.clear();
    this.router.navigate(['/app']);
  }
  public response(res: any, index: number) {
    if (!(res.status === 200)) {
      throw new Error(res.message);
    }
    else {
      return res;
    }
  }
  handleSession() {
    this.matSnackBar.open('Session Expired', 'Error', {
      duration: 2000,
    });
    setTimeout(() => {
      this.logout();
    }, 2000);

  }
}
