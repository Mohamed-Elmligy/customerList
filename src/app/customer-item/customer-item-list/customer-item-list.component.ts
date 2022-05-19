//angular module

import { CustomerItem } from './../../models/customer.item.model';
import { Component, Input, OnInit } from '@angular/core';

//material module

import { MatDialog } from '@angular/material/dialog';

// components

import { CustomerItemDetailsComponent } from '../customer-item-details/customer-item-details.component';

@Component({
  selector: 'app-customer-item-list',
  templateUrl: './customer-item-list.component.html',
  styleUrls: ['./customer-item-list.component.scss']
})
export class CustomerItemListComponent implements OnInit {

  //#region declare variables 

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

  updateItem(item: CustomerItem, indx: number) {
    const dialogRef = this.dialog.open(CustomerItemDetailsComponent, {
      data: { item: Object.assign({}, item), indx: indx }
    }
    )

    dialogRef.afterClosed().subscribe(result => result ? this.list[indx] = result.model : null);

    //or

    // (result == undefined) && null && (this.list[indx] = result.model)
  }

  deleteItem = (index: number) => this.list.splice(index, 1)

  //#endregion
}


