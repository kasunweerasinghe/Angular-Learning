import {Pipe, PipeTransform} from "@angular/core";

// need to add Pipes decorator
@Pipe({
  name: 'shorten'
})
// when we create a custom pipes need to implement PipeTransform
export class ShortenPipes implements PipeTransform {

  // and need also need transform() method
  transform(value: any, limit: number) {
    if (value.length > limit) {
      // transform always need to return
      return value.substr(0, limit) + '...';
    }
    return value;

  }
}

