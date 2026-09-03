import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exexperiencePipe',
})
export class ExexperiencePipePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    if(value != null && value instanceof Date){
      let today = new Date()
      let currentYear: number = today.getFullYear()
      let joinyear: number = value.getFullYear()

      return (currentYear - joinyear)
    }
    return null;
  }
}
