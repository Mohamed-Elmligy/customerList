import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailsComponent } from './customer/customer-details/customer-details.component';
import { CustomerComponent } from './customer/customer-list/customer-list.component';

const routes: Routes = [
   
    {path:'customer/list', component:CustomerComponent},
    {path: 'customer/add', component: CustomerDetailsComponent},
    {path: 'customer/update/:id', component: CustomerDetailsComponent},
    {path:'', redirectTo: 'customer/list', pathMatch: 'full'},
  // {path: '**', component:CustomerComponent}// Wild card path
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
