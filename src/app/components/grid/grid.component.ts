import { ChangeDetectionStrategy, Component, computed, input, Input } from '@angular/core';
import { CellComponent } from './cell/cell.component';
import { CommonModule } from '@angular/common';
import { Grid } from '../../classes/grid-manager';
import { getRandomUUID } from '../../utilities/functions';

@Component({
  selector: 'app-grid',
  imports: [CommonModule,CellComponent],
  template: `
    <div class="grid">


    @for (row of grid(); track row) {
      <div class="row">
        @for(column of row; track column) {
          <app-cell [opt]="row"/>
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
