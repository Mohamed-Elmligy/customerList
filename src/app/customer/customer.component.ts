import { Component, OnInit, OnChanges } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service'

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customerList: {} = {};
  constructor(private allcustomer: CustomersService) {

  }

  
  ngOnInit(): void {
    this.allcustomer.getAllCustomers().subscribe(customers=>{this.customerList=customers})
     //   throw new Error('Method not implemented.');
  }

  getData(object:any,key:string){
    return object[key];
  }

}
