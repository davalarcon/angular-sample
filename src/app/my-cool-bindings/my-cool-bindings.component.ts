import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cherry-thang',
  templateUrl: './my-cool-bindings.component.html',
  styleUrls: ['./my-cool-bindings.component.css']
})
export class MyCoolBindingsComponent implements OnInit {

  feedbackMessage: string = 'Please click on these things.'
  imageUrl: string = 'https://media.giphy.com/media/3og0IKWBUsRYQrqIH6/giphy.gif';
  clickCount: number = 0;
  isInputDisabled: boolean = false;
  buttonText: string = 'Disable The Input';

  // https://media.giphy.com/media/26gsd2NcDEw4ESU7u/giphy.gif
  //https://media.giphy.com/media/MBl7PqonPlMYg/giphy.gif

  constructor() { }

  ngOnInit() {
  }
  changeTheImage(){
    if(this.imageUrl === 'https://media.giphy.com/media/3og0IKWBUsRYQrqIH6/giphy.gif'){
      this.imageUrl = 'https://media.giphy.com/media/MBl7PqonPlMYg/giphy.gif';
    }
    else {
      this.imageUrl = 'https://media.giphy.com/media/3og0IKWBUsRYQrqIH6/giphy.gif';
    }
    this.clickCount+=1;
  }

  updateMessage(){
    this.feedbackMessage = 'Thanks for clicking';
    this.clickCount += 1;
  }

  toggleThatInput (){
    if (this.isInputDisabled === true){
      this.isInputDisabled = false;
      this.buttonText = 'Disable this Input'
    }
    else{
      this.isInputDisabled = true;
      this.buttonText = 'Enable this Input'
    }
  }
}
