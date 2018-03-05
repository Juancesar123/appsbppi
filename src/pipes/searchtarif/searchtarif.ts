import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SearchtarifPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'searchtarif',
})
export class SearchtarifPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  // transform(value: any[], input: string):any[] {
  //   // if (input) {

  //   //   return value.filter(function (el: any) {
  //   //     return console.log(input);
  //   //     //return el.Uraian_parameter.toString().indexOf(input) > -1 ;
  //   //   })
  //   //  }
    
  //    return value;
  // }
  transform(data: any[], searchTerm: string): any[] {
    if(!data) return [];
    return data.filter(item => {
      return item.Uraian_parameter.toString().indexOf(searchTerm) !== -1 
    });
  }
}
