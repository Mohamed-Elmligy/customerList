import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomersService } from 'src/app/services/customers.service'

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  // email = new FormControl('', [Validators.required, Validators.email]);
  myForm!: FormGroup;
  constructor(private fb: FormBuilder, private allcustomer: CustomersService) { }

  ngOnInit(){
    this.myForm = this.fb.group({
      customer_name: ['', [
        Validators.required, Validators.minLength(3), Validators.maxLength(20)
      ]],
      id_number: ['', [
        Validators.required, Validators.minLength(14), Validators.maxLength(14)
      ]],
      phone: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      city:['', [Validators.required]],
      address:['',[Validators.required, Validators.minLength(5), Validators.maxLength(30)]]
    });
  }

  getErrorMessage(t:any) {
    
    if (t?.hasError('required')) {
      return 'You must enter a value';
    }

    return t?.hasError('') ? 'Not a valid' : '';
  }
  

  get customer_name() {
    return this.myForm.get('customer_name')
  }

  get id_number() {
    return this.myForm.get('id_number')
  }

  get phone() {
    return this.myForm.get('phone')
  }

  get city() {
    return this.myForm.get('city')
  }

  get address() {
    return this.myForm.get('address')
  
  }

  editCustomer(){
    this.allcustomer.updateCustomer(this.myForm.value).subscribe()
  }

  createcustomer(){
    this.allcustomer.postCustomer(this.myForm.value).subscribe()
  }

}
