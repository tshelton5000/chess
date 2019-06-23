import pieceChooser from '../helpers/pieceChooser';
import {TileConfig} from '../components/Board/Board';

export interface coords {
  x: number,
  y: number
}

export default function inCheck(board: TileConfig[][], whiteTurn: boolean): boolean{
  let enemyArr: coords[];
  let kingX: number;
  let kingY: number;
  [enemyArr, kingX, kingY] = enemiesFinder(board, whiteTurn);

  return enemiesCanCheck(board, enemyArr, kingX, kingY, whiteTurn);
}

export function enemiesFinder(board: TileConfig[][], whiteTurn: boolean): [coords[], number, number]{
  let enemyArr: coords[] = [];
  let kingX: number = -1;
  let kingY: number = -1;
  let [kingColor, enemyColor]: [string, string] = whiteTurn === true 
      ? ['white', 'black'] 
      : ['black', 'white'];

  board.forEach((row: TileConfig[], y: number) => {
    row.forEach((tile: TileConfig, x: number) => {
      if (tile.type === 'king' && tile.color === kingColor){
        kingX = x;
        kingY = y;
      } else if (tile.color === enemyColor){
        enemyArr.push({x, y});
      }
    })
  })

  return [enemyArr, kingX, kingY];
}

export function enemiesCanCheck(board: TileConfig[][], enemyArr: coords[], kingX: number, kingY: number, whiteTurn: boolean): boolean{
  let checkBool: boolean = false;
  enemyArr.forEach(enemy => {
    if (pieceChooser(board[enemy.y][enemy.x].type)
      .canMove(board, enemy.x, enemy.y, kingX, kingY, !whiteTurn)){
        checkBool = true;
      }
  })
  return checkBool;
}