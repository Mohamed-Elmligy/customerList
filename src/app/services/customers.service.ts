//angular module

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

//components

import { CustomerDto } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
//
export class CustomersService {

  // #region declare variables

  public customerKey: any;

  // #endregion

  // #region constructor

  httpOption;
  constructor(private httpClient: HttpClient) {
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // ,Authorization: 'my-auth-token'
      })
    };
  }

  // #endregion

  // #region main actions

  // get all customers

  getAllCustomers = () => this.httpClient.get(`${environment.APIURL}/customers.json`);
  
  //create new customers

  createCustomer = (newCustomer: any) => this.httpClient.post(`${environment.APIURL}/customers.json`, newCustomer);

  //get by customer id

  getCustomerByID = (id: any) => this.httpClient.get<CustomerDto>(`${environment.APIURL}/customers/${id}.json`);

  //update customer

  updateCustomer = (newdata: any, id: any) => this.httpClient.put(`${environment.APIURL}/customers/${id}.json`, newdata);
  
  //delete castomer

  deleteCustomer = (customerID: any) => this.httpClient.delete(`${environment.APIURL}/customers/${customerID}.json`);
  
  // #endregion
  
}
