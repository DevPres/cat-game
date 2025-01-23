import { getRandomUUID } from "../utilities/functions";

export class Cell {

  id = getRandomUUID();
  image!: string;
  name!: string;



  constructor(column: number, row: number) {
    console.log(column, row)
    this.image='/assets/img/strawberry.jpg'
  }


}
