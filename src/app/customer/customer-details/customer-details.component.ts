import { CustomerDto } from './../../models/customer.model';

// angualr modules

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

// components

import { CreateDialogeComponent } from '../../dialog/create-dialoge/create-dialoge.component';

// services

import { CustomersService } from '../../services/customers.service';
import { CustomerItemDetailsComponent } from 'src/app/customer-item/customer-item-details/customer-item-details.component';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  // #region declare variables

  form!: FormGroup;
  routeSub: any;
  id: any;
  model: CustomerDto;

  // #endregion

  // #region constructor

  constructor(
    private formBuilder: FormBuilder,
    private customersService: CustomersService,
    public dialog: MatDialog,
    private route: ActivatedRoute,
  ) {

    // init variables

    this.id = this.route.snapshot.params['id']; //easy way to get id from url
    this.model = new CustomerDto;

    // init forms

    this.initForm();
  }

  // #endregion

  // #region init form

  initForm() {
    this.form = this.formBuilder.group({
      customer_name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      id_number: ['', [Validators.required, Validators.minLength(14), Validators.maxLength(14)]],
      phone: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      city: ['', [Validators.required]],
      address: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]]
    });
  }

  getErrorMessage(t: any) {
    return (t?.hasError('required')) ? 'You must enter a value' : t?.hasError('') ? 'Not a valid' : '';
  }

  get myFormControls() {
    return this.form.controls;
  }

  //just fom example

  // get customer_name() {
  //   return this.myForm.get('customer_name')
  // }

  // get id_number() {
  //   return this.myForm.get('id_number')
  // }

  // get phone() {
  //   return this.myForm.get('phone')
  // }

  // get city() {
  //   return this.myForm.get('city')
  // }

  // get address() {
  //   return this.myForm.get('address')

  // }

  // #endregion

  // #region ngOnInit

  ngOnInit() {
    this.loadControls();
  }

  // #endregion

  // #region load controls

  loadControls() {
    this.getCustomerByID();
  }

  getCustomerByID() {
    (this.id) && this.customersService.getCustomerByID(this.id).subscribe((data: CustomerDto) => {
      this.model = data;
      (!this.model.items) ? this.model.items = [] : null
    });

  }

  // #endregion

  // #region main actions

  saveCustomer = () => (this.id) ? this.updateCustomer() : this.createCustomer();
  

  updateCustomer = () => this.customersService.updateCustomer(this.model, this.id).subscribe(() => this.openDialog("You Update that customer"));
  

  createCustomer = () => this.customersService.createCustomer(this.model).subscribe(() => this.openDialog("You create New customer"));
  

  openDialog(message: string) {
    this.dialog.open(CreateDialogeComponent, {
      data: { message }
    })
  }

  // #endregion

  //#region item actions

  createItem() {
    const dialogRef = this.dialog.open(CustomerItemDetailsComponent)
    dialogRef.afterClosed().subscribe(result => (result != undefined) ? this.model.items.push(result.model) : null);

    //or

    // (result == undefined) && null && this.model.items.push(result.model)
  }

  //#endregion

}
