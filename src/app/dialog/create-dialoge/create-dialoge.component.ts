//angular modules

import { Component, Inject, OnInit, Optional } from '@angular/core';

//angular material modules

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-dialoge',
  templateUrl: './create-dialoge.component.html',
  styleUrls: ['./create-dialoge.component.scss']
})
export class CreateDialogeComponent implements OnInit {

  //#region constructor

  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: { message: string }) { }

  //#endregion

  //#region ngInit

  ngOnInit(): void {
  }

  //#endregion

}
