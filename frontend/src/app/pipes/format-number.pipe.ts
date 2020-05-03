import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumber'
})
export class FormatNumberPipe implements PipeTransform {

  transform(value: number): string {
    if(value == 0){
      return '00';
    }else{
      return value.toString();
    }
  }

}
