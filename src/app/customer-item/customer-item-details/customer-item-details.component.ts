// components

import { CustomerItem } from './../../models/customer.item.model';

//angular modules

import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-customer-item-details',
  templateUrl: './customer-item-details.component.html',
  styleUrls: ['./customer-item-details.component.scss']
})

export class CustomerItemDetailsComponent implements OnInit {

  // #region declare variables

  form!: FormGroup;
  model: CustomerItem;
  itemId: number

  // #endregion

  // #region constructor

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CustomerItemDetailsComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: { item: CustomerItem, indx: number }

  ) {

    this.model = this.data?.item || new CustomerItem;
    this.itemId = this.data?.indx;
    this.initForm()

  }

  // #endregion

  // #region init form

  initForm() {
    this.form = this.formBuilder.group({
      item_name: ['', [Validators.required]],
      item_code: ['', [Validators.required]],
      item_price: ['', [Validators.required]],
      item_quantity: ['', [Validators.required]],
      discription: ['', [Validators.required]],
      id: []
    })

  }

  get myFormControls() {
    return this.form.controls;
  }

  //error message validation

  getErrorMessage = (t: any) => (t?.hasError('required')) ? 'You must enter a value' : t?.hasError('') ? 'Not a valid' : '';
  
  //#endregion

  // #region ngOnit

  ngOnInit(): void {
  }

  //##endregion

  // #region actions functions

  closeCustomerItem = () =>  this.dialogRef.close()
  
  saveCustomerItem(model: any) {
    this.model.id = Math.floor(Math.random() * 100)
    this.dialogRef.close({ model });

  }

  //#endregion

}
