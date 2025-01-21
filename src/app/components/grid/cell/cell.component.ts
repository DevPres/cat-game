import { Component } from '@angular/core';
import { getRandomUUID } from '../../../utilities/functions';

@Component({
  selector: 'app-cell',
  imports: [],
  template: `
    <div class="cell">

    </div>
  `,
  styles: ``
})
export class CellComponent {
  id = getRandomUUID();


}
