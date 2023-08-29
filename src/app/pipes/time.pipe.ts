import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appTime',
  standalone: true
})
export class TimePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {

    const h = Math.floor(value / 60);
    const m = value % 60;

    return `${ h }h ${ m }m`;
  }

}
