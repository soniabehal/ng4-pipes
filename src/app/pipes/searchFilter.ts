import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: "SearchFilter"
})
export class SearchFilter implements PipeTransform {
    transform(data, value) {
        if (value != '') {
            return data.filter(element => {
                var x = Object.keys(element);
                var cond = false;
                x.forEach(ele => {
                    cond = cond || element[ele].toString().indexOf(value.toString()) > -1;
                })
                return cond;
            });
        }
        else {
            return data;
        }
    }
}