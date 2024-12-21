import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decodePipe',
  standalone: true,
})
export class DecodePipePipe implements PipeTransform {
  transform(value: string | undefined): string {
    if (!value) {
      return ''; // Return an empty string if the input is undefined
    }
    const textarea = document.createElement('textarea');
    textarea.innerHTML = value;
    return textarea.value;
  }
}
