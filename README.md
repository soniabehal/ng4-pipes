# ng4-pipes

A simple yet elegant way to apply filtering functionality on your HTML tables in Angular using pipes.
```
Search Filter
```
### Table - initially
![table](https://github.com/soniabehal/ng4-pipes/blob/master/images/ng4-pipes1.png)

### Table - Filtering by Name
![filteres by name](https://github.com/soniabehal/ng4-pipes/blob/master/images/ng4-pipes2.png)

### Table - Filtering by fields 10th and Age
![filtered by age](https://github.com/soniabehal/ng4-pipes/blob/master/images/ng4-pipes3.png)

### Installation
Install using npm
```bash
npm install --save ng4-pipes
```

 ##Search Filter
### Usage
1. Import into your.module.ts
```typescript
import{ SearchFilter } from "ng4-pipes/src/app/pipes/searchFilter"

declarations: [ 
    SearchFilter 
    ]
```

2. Import the required filter in your.component.ts
```typescript
import{SearchFilter} from"ng4-pipes/src/app/pipes/searchFilter";
```

3. Use in your.component.html
#### Define the textbox(<input type="text">) to be used to search in the table
```typescript
<input type="text" [(ngModel)]="search"/>
```
#### Use the pipe on the target table
```typescript
<tr *ngFor="let student of students | SearchFilter:search">
```

***



## Troubleshooting

Please follow this guidelines when reporting bugs and feature requests:

1. Use [GitHub Issues](https://github.com/valor-software/ng2-charts/issues) board to report bugs and feature requests (not our email address)
2. Please **always** write steps to reproduce the error. That way we can focus on fixing the bug, not scratching our heads trying to reproduce it.

Thanks for understanding!

### License

The MIT License (see the [LICENSE](https://github.com/valor-software/ng2-charts/blob/master/LICENSE) file for the full text)
