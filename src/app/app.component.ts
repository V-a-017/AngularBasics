import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My demo app';
  number1=0;
  number2=0;
  count = 5;


  increment = () => {
    this.count++;
  }


  decrement= () => {
    this.count--;
  }

  
  listOfNumbers = [1,2,3,4,5];
  listOfName=["abc","def","ghi"];


  sum=0;
  add = () => {
  this.sum=this.number1+this.number2;
  }

}
