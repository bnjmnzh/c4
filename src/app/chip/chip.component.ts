import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chip',
  template: `
    <button> {{ value }}</button>
  `,
  styles: []
})
export class ChipComponent {

  @Input() value: 'O'; // ui component

}
