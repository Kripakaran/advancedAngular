import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[credit-card]'
})
export class CreditCardDirective {

  constructor() { }

  // property binding on border property if we enter invalid input 
  @HostBinding('style.border')
    border: string;
  

  @HostListener('input', ['$event'])     // host is the <input> tag and we are listening for events on input
  onKeyDown(event: KeyboardEvent){
    // console.log(event); [value is present in event.target.value]
    const input = event.target as HTMLInputElement;

    let trimmed = input.value.replace(/\s+/g, '');  // removes all whitespace characters
    if (trimmed.length > 16){
      trimmed = trimmed.substr(0,16);   // puts restraint of only 16 characters allowed
    }

    const numbers = [];
    for( let i = 0; i < trimmed.length; i+=4){
      numbers.push(trimmed.substr(i,4));  // divide the 16 numbers into individual substrings of length 4
    }

    input.value = numbers.join(' ');   // join the 16 numbers through empty space and output in the textbox


    this.border = '';

    if(/[^\d]+/.test(trimmed)){       // testing for alphabets in 16 digit input
      this.border = '1px solid red';    // if so, change border of textbox to red!
    }
  } 


}
