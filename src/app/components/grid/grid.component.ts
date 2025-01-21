import { Component, computed, Input } from '@angular/core';
import { CellComponent } from './cell/cell.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grid',
  imports: [CommonModule,CellComponent],
  template: `
    <div class="grid">


    @for (row of rowArr; track row) {
      <div class="row">
        @for(column of columnArr; track column) {
          <app-cell/>
        }
      </div>
    }
    </div>
  `,
  styles: `

  `
})
export class GridComponent {

  X=8;
  Y=8;

  rowArr = Array(this.X).fill('')
  columnArr = Array(this.Y).fill('')

}
