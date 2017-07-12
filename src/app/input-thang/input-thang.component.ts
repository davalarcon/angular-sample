import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pineapple',
  templateUrl: './input-thang.component.html',
  styleUrls: ['./input-thang.component.css']
})
export class InputThangComponent implements OnInit {

  message: string = 'Select an Option!'

  // this variable is used to store the user's selection
  mySelection: string;

  constructor() { }

  ngOnInit() {
  }

  reactToSelection(){
    if (this.mySelection === "bell" ){
      this.message = 'You are being irresponbile to your body';
    } else {
      this.message = 'that is a fine selection'
    }
  }

}
