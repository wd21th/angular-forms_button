import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {

  transform(arr: Array<string>): string {
    console.log("PIPE ",arr)
    return arr.join(" ");
  }

}