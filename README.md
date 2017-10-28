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


