import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridComponent } from './components/grid/grid.component';
import { GridManager } from './classes/grid-manager';
import { GameManagerService } from './services/game-manager.service';

@Component({
  selector: 'app-root',
  imports: [GridComponent],
  template: `
    <h1>Funziona</h1>
    <h3>donde esta el gato</h3>
    <div class="container">
      <app-grid [grid]="grid()"/>
    </div>
  `,
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'cat-game';
  gameManager = inject(GameManagerService)


  grid = computed(() => {
    return this.gameManager.grid()
  })


  ngOnInit(): void {
    this.gameManager.createGrid(8,8)

  }




}
