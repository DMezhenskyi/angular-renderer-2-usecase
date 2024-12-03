import { Directive, ElementRef, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: 'input[interactive-input]',
  host: {
    '(focus)': 'activateInput()',
    '(blur)': 'deactivateInput()'
  }
})
export class InputInteraction {
  renderer = inject(Renderer2);
  inputEl = inject<ElementRef<HTMLInputElement>>(ElementRef);
  tooltip: HTMLDivElement | null = null;
  constructor() {
    this.renderer.listen(
      this.inputEl.nativeElement,
      '@searchState.done',
      () => {
        if (!this.tooltip) {
          this.tooltip = this.renderer.createElement('div') as HTMLDivElement;
          this.tooltip.innerText = 'Animation is done';
          this.tooltip.classList.add('tooltip-container')
          const { top, height } =
            this.inputEl.nativeElement.getBoundingClientRect() as DOMRect;
            this.tooltip.style.top = `${top - height}px`
          document.body.appendChild(
            this.tooltip
          )
        }
      }
    )
    this.inputEl.nativeElement.placeholder = 'Focus on me...';
    console.log('Component Renderer: ', this.renderer)
  }
  activateInput() {
    this.renderer.setProperty(
      this.inputEl.nativeElement,
      '@searchState',
      'active'
    )
  }
  deactivateInput() {
    this.renderer.setProperty(
      this.inputEl.nativeElement,
      '@searchState',
      'deactive'
    )
  }
}
