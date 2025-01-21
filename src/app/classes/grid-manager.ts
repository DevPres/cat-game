export type Grid = string[][];

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
        rowArr.push(y.toString())
      }
      grid.push(rowArr)
    }
    return grid
  }
}
