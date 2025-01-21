import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridComponent } from './components/grid/grid.component';
import { GridManager } from './classes/grid-manager';

@Component({
  selector: 'app-root',
  imports: [GridComponent],
  template: `
    <h1>Funziona</h1>
    <h3>donde esta el gato</h3>
    <div class="container">
      <app-grid [grid]="gridManager.grid"/>
    </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cat-game';
  gridManager = new GridManager(8,8)

}
