import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pin-code',
  templateUrl: './pin-code.component.html',
  styleUrls: ['./pin-code.component.css']
})
export class PinCodeComponent implements OnInit {
  name = new FormControl('');

  number = new FormControl();

  pin_code: Array<string> = []

  constructor() { }

  ngOnInit() {
  }


  add_digit(digit: string){
    if(this.pin_code.length <= 3){
      this.pin_code.push(digit)
    }

    console.log(this.pin_code);
    
  }

}