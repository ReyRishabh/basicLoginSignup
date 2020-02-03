import { Component } from '@angular/core';
import { BaThemeSpinner } from './utilities/services/baThemeSpinner.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assignment';
  constructor(private loader: BaThemeSpinner){

  }
  ngAfterViewInit(){
    // this.loader.hide();
  }
}
