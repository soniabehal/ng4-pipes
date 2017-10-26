import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  search="";
  students=[
    {name:"Daman",email:"daman123@gmail.com",age:20,matrix:67,senior:80},
    {name:"Raman",email:"ram@gmail.com",age:23,matrix:45,senior:56},
    {name:"Suman",email:"Suman@gmail.com",age:34,matrix:67,senior:90},
    {name:"Veer",email:"veer@gmail.com",age:10,matrix:89,senior:0},
    {name:"Rahul",email:"rahul@gmail.com",age:45,matrix:90,senior:90}
  ]
}
