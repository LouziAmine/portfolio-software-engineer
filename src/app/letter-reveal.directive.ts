import { Directive, ElementRef, Input, OnInit  } from '@angular/core';

@Directive({
  selector: '[appLetterReveal]'
})
export class LetterRevealDirective implements OnInit  {

  @Input('letterReveal') text: string = '';

  revealedText: string = '';

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.revealText();
  }

  revealText() {
    const textArray = this.text.split('');
    let index = 0;

    const interval = setInterval(() => {
      if (index === textArray.length) {
        clearInterval(interval);
      } else {
        this.revealedText += textArray[index];
        this.el.nativeElement.textContent = this.revealedText;
        index++;
      }
    }, 150); // Adjust speed as needed
  }


}
