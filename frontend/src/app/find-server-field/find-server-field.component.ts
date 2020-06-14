import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-find-server-field',
  templateUrl: './find-server-field.component.html',
  styleUrls: ['./find-server-field.component.css']
})
export class FindServerFieldComponent implements OnInit {

  private readonly addressIpPattern = '^((25[0-5]|(2[0-4]|1[0-9]|[1-9]|)[0-9])(\.(?!$)|$)){4}$';
  addressFormControl = new FormControl('',[Validators.required, Validators.pattern(this.addressIpPattern)]);

  constructor() { }

  ngOnInit() { }

  onCheckServer():void{
    // TODO do request to backend
  }

}
