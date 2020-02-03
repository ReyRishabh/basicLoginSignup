import { Injectable } from '@angular/core';
import { CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CommonService } from '../services/common.service';

@Injectable()
export class AuthGuard implements CanActivateChild {
    constructor(private router: Router, private commonService: CommonService) { }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
            if(this.commonService.checkLoggedIn())
            return true;
            else 
           {
               this.router.navigate(['/app']);
                return false;
            }
    }
   
}

