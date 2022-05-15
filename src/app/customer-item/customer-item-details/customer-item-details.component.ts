import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-item-details',
  templateUrl: './customer-item-details.component.html',
  styleUrls: ['./customer-item-details.component.scss']
})
export class CustomerItemDetailsComponent implements OnInit {
  value = 'Clear me';
  constructor() { }

  ngOnInit(): void {
  }

}
