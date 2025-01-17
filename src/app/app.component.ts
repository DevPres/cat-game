import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridComponent } from './components/grid/grid.component';

@Component({
  selector: 'app-root',
  imports: [GridComponent],
  template: `
    <h1>Funziona</h1>
    <div class="container">
      <app-grid />
    </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cat-game';
}
