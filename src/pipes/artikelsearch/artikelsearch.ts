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
  transform(data: any[], searchTerm: string): any[] {
    if(!data) return [];
    return data.filter(item => {
      return item.judul.toString().indexOf(searchTerm) !== -1 
    });
  }
}
