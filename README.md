# ng4-pipes
This package consists of pipes which you can use in your project. Just you need to do the imports and you them.
***
### Installing ng4-pipes
npm install --save ng4-pipes
___
### List of pipes available 
1. Search filter

***
### Search Filter
This pipe will filter the table data according to text given to it. Check it out how to use it.

1. Import andd declare the search filter in ur module

##### import{SearchFilter} from"ng4-pipes/src/app/pipes/searchFilter";

##### declarations: [
#####   SearchFilter
##### ]

2. Import the filter in your component

#### import{SearchFilter} from"ng4-pipes/src/app/pipes/searchFilter";

3. Use it on required table

#### <input type="text" [(ngModel)]="search"/>

##### <tr *ngFor="let student of students | SearchFilter:search">

***
### app.module.ts 
![alt text](https://github.com/soniabehal/ng4-pipes/blob/master/images/module.PNG)
***
### app.component.ts
![alt text](https://github.com/soniabehal/ng4-pipes/blob/master/images/component.PNG)
***
### app.component.html
![alt text](https://github.com/soniabehal/ng4-pipes/blob/master/images/html.PNG)
***
### Test 1
![alt text](https://github.com/soniabehal/ng4-pipes/blob/master/images/test1.PNG)
***
### Test 2
![alt text](https://github.com/soniabehal/ng4-pipes/blob/master/images/test2.PNG)

