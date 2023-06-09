import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: string): string {
    return value[0].toUpperCase()+value.substring(1);
  }

  /*
 transform(value: string): string {
    return value.toUpperCase();
  }

  */

}
