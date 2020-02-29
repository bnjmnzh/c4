import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chip',
  template: `
    <button *ngIf="!value"> {{ value }} </button>
    <button class="red" *ngIf="value == 'red'"> {{ value }} </button>
    <button class="yellow" *ngIf="value == 'yellow'"> {{ value }} </button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 0; border-radius: 50%; border: 1px solid #3498db; cursor: pointer;}', 
          '.red { background-color: #e74c3c}', 
          '.yellow { background-color: #f1c40f}']
})
export class ChipComponent {

  @Input() value: 'red' | 'yellow'; // ui component

}
