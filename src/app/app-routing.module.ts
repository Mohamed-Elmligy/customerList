import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailsComponent } from './customer/customer-details/customer-details.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [

  {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login/list', component: CustomerDetailsComponent},
  {path:'login', component:CustomerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
