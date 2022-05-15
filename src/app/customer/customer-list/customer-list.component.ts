// angualr modules
import { Component, OnInit, OnChanges } from '@angular/core';

// services
import { CustomersService } from '../../services/customers.service'

@Component({
  selector: 'app-customer',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
//
export class CustomerComponent implements OnInit {

  // #region declare variables
  customerList: {} = {};
  // #endregion

  // #region constructor
  constructor(
    private allcustomer: CustomersService
  ) { }
  // #endregion

  // #region ngOnInit
  ngOnInit(): void {
    this.listAllCustomers();
  }

  listAllCustomers() {
    this.allcustomer.getAllCustomers().subscribe(customers => { this.customerList = customers })
  }
  // #endregion

  // #region main actions
  getData(object: any, key: string) {
    return object[key];
  }

  deleteThatCustomer(cusID: any) {
    this.allcustomer.deleteCustomer(cusID).subscribe(() => {
      this.listAllCustomers();
      console.log(cusID)
    })
  }
  // #endregion

}
