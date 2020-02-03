import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../utilities/services/common.service';
import { environment } from '../../environments/environment';
import { map, catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';
import { MatSnackBar } from '../../../node_modules/@angular/material';

@Injectable({
  providedIn: 'root'
})
export class OnboardingService {

  constructor(private http: HttpClient, private commonService: CommonService,private matSnackBar: MatSnackBar) { }


  login(payload: Object) {
    return this.http.post(`${'http://5e359a42f7e55d0014ad4e33.mockapi.io/api'}/login`,payload,
    {headers:{'content-language': 'en', 
    //'X-RapidAPI-Key':'d40a50e1d6mshf3c2adab738a613p171235jsn503813539a8c',
   // 'utcoffset':(new Date().getTimezoneOffset()).toString()
  }
  }, )
        .pipe(map((res: any) => { if (res.statusCode === 200) {  return res.data } else
         { console.error(res); this.matSnackBar.open('Something went wrong', 'Error', {
            duration: 2000,
          }); return;} })
        )
}
signUp(payload: Object) {
  return this.http.post(`${'http://5e359a42f7e55d0014ad4e33.mockapi.io/api'}/signup`,payload,
  {headers:{'content-language': 'en', 
 // 'X-RapidAPI-Key':'d40a50e1d6mshf3c2adab738a613p171235jsn503813539a8c',
  //'utcoffset':(new Date().getTimezoneOffset()).toString()
}
}, )
      .pipe(map((res: any) => { if (res.statusCode === 200) {  return res } else
       { console.error(res); this.matSnackBar.open('Something went wrong', 'Error', {
          duration: 2000,
        }); return;} })
      )
}



}
