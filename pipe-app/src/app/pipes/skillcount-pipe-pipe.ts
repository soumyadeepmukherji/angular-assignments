import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'skillcountPipe',
})
export class SkillcountPipePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    if(value != null && Array.isArray(value)){
      return value.length
    }
    return null;
  }
}
