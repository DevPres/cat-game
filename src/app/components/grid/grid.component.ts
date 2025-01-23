import { ChangeDetectionStrategy, Component, computed, input, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { CellComponent } from './cell/cell.component';
import { CommonModule } from '@angular/common';
import { Grid } from '../../classes/grid-manager';
import { getRandomUUID } from '../../utilities/functions';

@Component({
  selector: 'app-grid',
  imports: [CommonModule,CellComponent],
  template: `
    <div class="grid">


    @for (row of grid(); let rowIdx = $index; track row) {
      <div class="row">
        @for(column of row; let columnIdx = $index; track column) {
          <app-cell [cell]="column"/>
        }
      </div>
    }
    </div>
  `,
  styles: `

  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent {

  grid = input<Grid>()




}
