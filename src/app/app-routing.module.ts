import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OtppageComponent } from './otppage/otppage.component';
import { OrderpageComponent } from './orderpage/orderpage.component';



const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'otp', component:OtppageComponent},
  {path:'order', component:OrderpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
