//angular modules
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-item-details',
  templateUrl: './customer-item-details.component.html',
  styleUrls: ['./customer-item-details.component.scss']
})
export class CustomerItemDetailsComponent implements OnInit {

  //#region variavles

  myForm!: FormGroup;
  id:any;
  formData!: {};
  //#endregion

  //#region constructor

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  )
   {
    this.id = this.route.snapshot.params['id'];
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

    this.formData = this.myForm.value 
    console.log(this.id)
    console.log(this.formData)
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
