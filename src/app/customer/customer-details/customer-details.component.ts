import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  // email = new FormControl('', [Validators.required, Validators.email]);
  myForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(){
    this.myForm = this.fb.group({
      customerName: ['', [
        Validators.required, Validators.minLength(3), Validators.maxLength(20)
      ]],
      idNumber: ['', [
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
  

  get customerName() {
    return this.myForm.get('customerName')
  }

  get idNumber() {
    return this.myForm.get('idNumber')
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

}
