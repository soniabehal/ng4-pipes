# ng4-pipes
This package consists of pipes which you can use in your project.

### Installing ng4-pipes
```terminal 
  npm install --save ng4-pipes
```

### List of pipes available 
1. Search filter


### Search Filter
This pipe will filter the table data according to text given to it. Check it out how to use it.

#### Step 1. Import and declare the search filter in ur module

```typescript 
  import{SearchFilter} from"ng4-pipes/src/app/pipes/searchFilter";

 declarations: [
   SearchFilter
  ]
  ```
#### Step 2. Import the filter in your component

```typescript 
import{SearchFilter} from"ng4-pipes/src/app/pipes/searchFilter";
```

#### Step 3.  Use "SearchFilter"  on required table

```typescript  <input type="text" [(ngModel)]="search"/>

 <tr *ngFor="let student of students | SearchFilter:search">
```

```typescript
app.module.ts 
```
![alt text](https://github.com/soniabehal/ng4-pipes/blob/master/images/module.PNG)

```typescript 
app.component.ts
```
![alt text](https://github.com/soniabehal/ng4-pipes/blob/master/images/component.PNG)

```typescript  
app.component.html
```
![alt text](https://github.com/soniabehal/ng4-pipes/blob/master/images/html.PNG)

```typescript  
Test 1 
```
![alt text](https://github.com/soniabehal/ng4-pipes/blob/master/images/test1.PNG)

```typescript 
Test 2
```
![alt text](https://github.com/soniabehal/ng4-pipes/blob/master/images/test2.PNG)

