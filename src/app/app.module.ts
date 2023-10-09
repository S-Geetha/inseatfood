import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NgOtpInputModule } from 'ng-otp-input';
import { OtppageComponent } from './otppage/otppage.component';
import { OrderpageComponent } from './orderpage/orderpage.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OtppageComponent,
    OrderpageComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgOtpInputModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
