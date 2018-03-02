import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ArtikelsearchPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'artikelsearch',
})
export class ArtikelsearchPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: any, input: string) {
    if (input) {
      return value.filter(function (el: any) {
       return el.judul.toString().indexOf(input) > -1 ;
      })
     }
     return value;
  }
}
