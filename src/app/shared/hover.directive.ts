import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[hover]'
})
export class HoverDirective {

    constructor(private el: ElementRef) {}

    @HostListener('mouseenter') onMouseEnter() {
        console.log(this.el);
        this.textDecorate('underline')
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.textDecorate('')
    }

    textDecorate(textDecoration: string) {
        this.el.nativeElement.style.textDecoration = textDecoration;
    }
}