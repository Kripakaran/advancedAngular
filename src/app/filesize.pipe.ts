import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize'
})
export class FilesizePipe implements PipeTransform {

  transform(value:number, extension: string = 'MB') {
    // console.log(value);
    return (value / (1024 * 1024)).toFixed(2) + extension; // conversion to mb then concatenating the word 'mb'
  }

}
