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

  myForm!: FormGroup;
  routeSub: any;
  id: any;
  model: CustomerDto;
  customerItem:{}={};

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

    // this.routeSub = this.route.params.subscribe(params => {  ||====>  //another way to get id from url ====||
    //   console.log(params) //log the entire params object
    //   console.log(params['id']) //log the value of id
    //   this.id = params['id'];
    // });
    this.model = new CustomerDto;

    // init forms
    this.initForm();
  }

  // #endregion

  
  // #region init form

  initForm() {
    this.myForm = this.formBuilder.group({
      customer_name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      id_number: ['', [Validators.required, Validators.minLength(14), Validators.maxLength(14)]],
      phone: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      city: ['', [Validators.required]],
      address: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]]
    });
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
    if (this.id) {
      this.customersService.getCustomerByID(this.id).subscribe((data:CustomerDto) => {
        this.model = data;
        if(!this.model.items) this.model.items = [];
      });
    }
  }

  // #endregion

  // #region main actions

  saveCustomer() {
    if (this.id) this.updateCustomer();
    else this.createCustomer();
  }

  updateCustomer() {
    this.customersService.updateCustomer(this.myForm.value, this.id).subscribe(() => {
      this.openDialog("You Update that customer");
    });
  }

  createCustomer() {
    this.customersService.createCustomer(this.myForm.value).subscribe(() => {
      this.openDialog("You create New customer, Want to create one more?");
    });
  }

  openDialog(message: string) {
    this.dialog.open(CreateDialogeComponent, {
      data: { message }
    })
  }

  openDialogItem(){
   const dialogRef = this.dialog.open(CustomerItemDetailsComponent)
    dialogRef.afterClosed().subscribe(result => {
      console.log(result.model)
      this.model.items.push(result.model)
      console.log(this.model)
      console.log(this.model.items)
    });

  }

  // #endregion
  
}
