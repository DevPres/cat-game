import { Injectable, signal } from '@angular/core';
import { Grid, GridManager } from '../classes/grid-manager';

@Injectable({
  providedIn: 'root'
})
export class GameManagerService {

  grid = signal<Grid>([])

  private gridManager!: GridManager;

  constructor() { }

  createGrid(column: number, row: number) {
    this.gridManager = new GridManager(column,row)
    this.grid.set(this.gridManager.grid)
  }

  getCell(column: number, row: number) {
    console.log(this.grid())
    return this.gridManager.get(column, row)
  }
}
