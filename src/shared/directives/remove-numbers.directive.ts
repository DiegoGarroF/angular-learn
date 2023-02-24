import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';
@Directive({
    selector: '[removeNumbers]'
})
export class RemoveNumbersDirective implements OnInit {
    constructor(private el: ElementRef ) {
    }
    ngOnInit(): void {
       // this.el.nativeElement.value = this.el.nativeElement.value.replace(/\d+/g, '');
    }
    @HostListener('keyup', ['$event'])
    handleKeyDown(event: any) {
        console.log(this.el.nativeElement.value);
      this.el.nativeElement.value =  this.removeCharacters();
    }

    private removeCharacters() {
        const listDeniedCharacters = ['1','2','3','4','5','6','7','8','9','0','.', ','];
        let elementValue = this.el.nativeElement.value;
        let newvalue = '';
        for (let index = 0; index < elementValue.length; index++) {
            if(!listDeniedCharacters.includes(elementValue[index])) {
                newvalue += elementValue[index];
            }
        }
        return newvalue;
    }
}