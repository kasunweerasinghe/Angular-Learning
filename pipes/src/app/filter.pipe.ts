import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter',
  // if we don't add this when after type input field that data won't add
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string) {
    if (value.length === 0 || filterString == '') {
      return value;
    }

    const resultArray = [];
    for (const item of value) {
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
