import pieceChooser from '../helpers/pieceChooser';
import {TileConfig} from '../components/Board/Board';

export interface coords {
  x: number,
  y: number
}

function inCheck(board: TileConfig[][], whiteTurn: boolean): boolean{
  let kingX: number;
  let kingY: number;
  let enemyArr: coords[] = [];
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
  
  let checkBool: boolean = false;
  enemyArr.forEach(enemy => {
    if (pieceChooser(board[enemy.y][enemy.x].type)
      .canMove(board, enemy.x, enemy.y, kingX, kingY, !whiteTurn)){
        checkBool = true;
      }
  })
  return checkBool;
}

export default inCheck;