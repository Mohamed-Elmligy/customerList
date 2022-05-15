import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-item-details',
  templateUrl: './customer-item-details.component.html',
  styleUrls: ['./customer-item-details.component.scss']
})
export class CustomerItemDetailsComponent implements OnInit {

  //#region variavles

  myForm!: FormGroup;

  //#endregion

  //#region constructor
  constructor(
    private formBuilder: FormBuilder,
  )
   {
     this.initForm()
    }
    //#endregion

    //#region init form
  initForm(){
    this.myForm = this.formBuilder.group({
      item_name: ['', [Validators.required]],
      item_code: ['', [Validators.required]],
      item_price: ['', [Validators.required]],
      item_quantity: ['', [Validators.required]],
      discription: ['', [Validators.required]]
    })
  }


  getErrorMessage(t: any) {
    if (t?.hasError('required')) {
      return 'You must enter a value';
    }
    return t?.hasError('') ? 'Not a valid' : '';
  }


  get myFormControls() {
    return this.myForm.controls;
  }

  //#endregion

  ngOnInit(): void {
  }

}
