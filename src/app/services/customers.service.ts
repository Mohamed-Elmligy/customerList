import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

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
    return this.httpClient.post(`${environment.APIURL}`, JSON.stringify(newCustomer), this.httpOption
    )
  }

 deleteCustomer(customerID: any) {
   return this.httpClient.delete(`${environment.APIURL}/customers/${customerID}.json`)
 }
}
