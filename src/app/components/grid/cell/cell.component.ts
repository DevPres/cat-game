import { Component, computed, input } from '@angular/core';
import { Cell } from '../../../classes/cell';


@Component({
  selector: 'app-cell',
  imports: [],
  template: `
    <div class="cell" (click)="onClick($event)">
      <img width="20" height="20" [src]="imageUrl()"/>
    </div>
  `,
  styles: ``
})
export class CellComponent {

  cell = input<Cell>()

  id = computed(() => {
    return this.cell()?.id || ""
  })

  imageUrl = computed(() => {
    return this.cell()?.image || ""
  })


  onClick(event: Event) {
    debugger
  }


}
