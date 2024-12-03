import { Component } from '@angular/core';
import { InputInteraction } from './input-interaction';
import { inputAnimation } from './animation';

@Component({
  selector: 'app-root',
  imports: [InputInteraction],
  animations: [inputAnimation],
  template: `
    <input interactive-input type="search" />
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
