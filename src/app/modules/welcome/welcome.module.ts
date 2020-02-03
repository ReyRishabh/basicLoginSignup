import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { welcomeRouting } from './welcome.routing';
import { MatInputModule, MatButtonModule,MatSnackBarModule,MatFormFieldModule,MatIconModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonService } from '../../utilities/services/common.service';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  imports: [
    CommonModule,
    welcomeRouting,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatRadioModule,
    MatIconModule
  ],
  declarations: [WelcomeComponent],
  providers: [CommonService]
})
export class WelcomeModule { }
