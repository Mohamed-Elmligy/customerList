import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

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

  getAllCustomers(){
    return this.httpClient.get(`${environment.APIURL}/customers.json`)
  }

  postCustomer(newCustomer:any){
    return this.httpClient.post(`${environment.APIURL}/customers.json`, newCustomer
    )
  }

  getkey(key:any){
    console.log(key)
    this.customerKey = key
    console.log(this.customerKey)
  }

  updateCustomer(newdata:any) {
    console.log(this.customerKey)
    return this.httpClient.put(`${environment.APIURL}/customers/${this.customerKey}.json`, newdata)
  }

 deleteCustomer(customerID: any) {
   return this.httpClient.delete(`${environment.APIURL}/customers/${customerID}.json`)
 }
}
