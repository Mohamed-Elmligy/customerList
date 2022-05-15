import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomerItemDetailsComponent } from '../customer-item-details/customer-item-details.component';

@Component({
  selector: 'app-customer-item-list',
  templateUrl: './customer-item-list.component.html',
  styleUrls: ['./customer-item-list.component.scss']
})
export class CustomerItemListComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
  openDialogeDetails(){
    this.dialog.open(CustomerItemDetailsComponent)
  }
}
