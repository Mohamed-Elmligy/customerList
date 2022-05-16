import { CustomerItem } from './../../models/customer.item.model';
//angular modules
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-item-details',
  templateUrl: './customer-item-details.component.html',
  styleUrls: ['./customer-item-details.component.scss']
})
export class CustomerItemDetailsComponent implements OnInit {

  //#region variavles

  myForm!: FormGroup;
  id: any;
  model: CustomerItem;
  
  //#endregion

  //#region constructor

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    public dialogRef: MatDialogRef<CustomerItemDetailsComponent>,

  ) {
    this.model = new CustomerItem;
    this.id = this.route.snapshot.params['id'];
    this.initForm()
  }

  //#endregion

  //#region init form

  initForm() {
    this.myForm = this.formBuilder.group({
      item_name: ['', [Validators.required]],
      item_code: ['', [Validators.required]],
      item_price: ['', [Validators.required]],
      item_quantity: ['', [Validators.required]],
      discription: ['', [Validators.required]]
    })

  }

  get myFormControls() {
    return this.myForm.controls;
  }

  //error message validation
  getErrorMessage(t: any) {
    if (t?.hasError('required')) {
      return 'You must enter a value';
    }
    return t?.hasError('') ? 'Not a valid' : '';
  }


 

  //#endregion

  // #region ngOnit
  
  ngOnInit(): void {
  }

  //##endregion

  // #region actions functions

  saveCustomerItem(model: any) {
    this.dialogRef.close({ model });
    console.log(model)
  }

  closeCustomerItem() {
    this.dialogRef.close()
  }

  //#endregion

}
