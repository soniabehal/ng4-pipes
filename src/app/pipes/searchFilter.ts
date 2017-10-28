import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: "SearchFilter"
})
export class SearchFilter implements PipeTransform {
    transform(data:any, value:any) {
        if (value != '') {
            return data.filter((element:any) => {
                var x = Object.keys(element);
                var cond = false;
                x.forEach(ele => {
                    cond = cond || element[ele].toString().toLowerCase().indexOf(value.toLowerCase()) > -1;
                })
                return cond;
            });
        }
        else {
            return data;
        }
    }
}