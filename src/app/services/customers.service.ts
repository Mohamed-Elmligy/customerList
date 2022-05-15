import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { CustomerDto } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
//
export class CustomersService {
 
  public customerKey: any;

  httpOption;
  constructor(private httpClient: HttpClient) {
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // ,Authorization: 'my-auth-token'
      })
    };
  }
  

  // get all customers
  getAllCustomers(){
    return this.httpClient.get(`${environment.APIURL}/customers.json`)
  }



  //create new customers
  createCustomer(newCustomer:any){
    return this.httpClient.post(`${environment.APIURL}/customers.json`, newCustomer
    )
  }


    //get by customer id
    getCustomerByID(id:any) {
      return this.httpClient.get<CustomerDto>(`${environment.APIURL}/customers/${id}.json`)
    }

  //update customer
  updateCustomer(newdata:any, id:any) {
    return this.httpClient.put(`${environment.APIURL}/customers/${id}.json`, newdata)
  }


  //delete castomer
 deleteCustomer(customerID: any) {
   return this.httpClient.delete(`${environment.APIURL}/customers/${customerID}.json`)
 }
}
