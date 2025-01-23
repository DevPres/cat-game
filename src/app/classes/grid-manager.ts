import { Cell } from "./cell";

export type Grid = Cell[][];

export class GridManager {
  grid: Grid;

  constructor(column: number, row:number) {
    this.grid = this.createGrid(column, row)

  }

  createGrid(column = 0, row = 0): Grid {
    let grid = [];
    for (let x = 0; x < row; x++) {
      let rowArr = [];
      for (let y = 0; y < column; y++) {
        rowArr.push(new Cell(y,x))
      }
      grid.push(rowArr)
    }
    return grid
  }

  get(column: number, row: number) {
    return this.grid[row][column]
  }
}
