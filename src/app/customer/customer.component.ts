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
    this.getAllCustomers();
    //   throw new Error('Method not implemented.');
  }
  
  getAllCustomers(){
    this.allcustomer.getAllCustomers().subscribe(customers=>{this.customerList=customers})

  }

  getData(object:any,key:string){
    return object[key];
  }
  

  
  sendKey(customerID:any){
    console.log(customerID)
    this.allcustomer.getkey(customerID)
    
  }


  deleteThatCustomer(cusID:any) {
    this.allcustomer.deleteCustomer(cusID).subscribe(() =>{
      this.getAllCustomers(); 
      console.log(cusID)  
    })
  }


}
