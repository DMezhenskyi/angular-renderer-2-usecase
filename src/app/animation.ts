import { trigger, state, style, transition, animate } from '@angular/animations';

export const inputAnimation = trigger('searchState', [
  state('inactive', style({ padding: '10px' })),
  state('active', style({ padding: '30px' })),
  transition('* <=> *', animate('300ms')),
])
