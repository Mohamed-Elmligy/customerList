//angular module

import { CustomerItem } from './../../models/customer.item.model';
import { Component, Input, OnInit } from '@angular/core';

//material module

import { MatDialog } from '@angular/material/dialog';

//import modules

import { CustomerItemDetailsComponent } from '../customer-item-details/customer-item-details.component';

@Component({
  selector: 'app-customer-item-list',
  templateUrl: './customer-item-list.component.html',
  styleUrls: ['./customer-item-list.component.scss']
})
export class CustomerItemListComponent implements OnInit {

  //#region variables 

  @Input() list!: CustomerItem[];

  //#endregion

  //#region constructors

  constructor(
    public dialog: MatDialog,
  ) {

  }

  //#endregion

  //#region ngOnit

  ngOnInit(): void {

  }

  //#endregion

  //#region actions functions 

  openDialogeDetails() {
    this.dialog.open(CustomerItemDetailsComponent)
  }
  deleteItem(index: number) {
    this.list.splice(index)
  }

  //#endregion
}
