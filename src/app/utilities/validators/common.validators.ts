import { FormControl,AbstractControl,ValidatorFn } from '@angular/forms';
import { Subscription } from 'rxjs';
export class CommonValidator {

    static email(control: FormControl): { [s: string]: boolean } {

        let EMAIL_REGEXP = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (control.value && control.value !== '' && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { invalid: true };
        }
    }
    static matchOtherValidator(otherControlName: string): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
          const otherControl: AbstractControl = control.root.get(otherControlName);
      
          if (otherControl) {
            const subscription: Subscription = otherControl
              .valueChanges
              .subscribe(() => {
                control.updateValueAndValidity();
                subscription.unsubscribe();
              });
          }
          return (otherControl && control.value !== otherControl.value) ? { match: true } : null;
        };
      }
}