import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filter:any){
    const resultArray = [];
    if (value.length === 0 ) {
      return value;
    }
    for (const item of value) {
      if (item.name.includes(filter)) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
