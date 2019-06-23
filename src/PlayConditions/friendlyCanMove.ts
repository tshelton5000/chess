import pieceChooser from '../helpers/pieceChooser';
import boardCopier from '../helpers/boardCopier';
import inCheck from './inCheck';
import {TileConfig} from '../components/Board/Board';
import {coords} from './inCheck';

function friendlyCanMove(board: TileConfig[][], whiteTurn: boolean){
  let friendlyCoords: coords[] = friendlyFinder(board, whiteTurn);

  return moveNoCheck(board, whiteTurn, friendlyCoords);
}

export default friendlyCanMove;

export function friendlyFinder(board: TileConfig[][], whiteTurn: boolean){
  let friendlyCoords: coords[] = [];
  board.forEach((row: TileConfig[], y: number) => {
    row.forEach((tile: TileConfig, x: number) => {
      if (whiteTurn ? tile.color === 'white' : tile.color === 'black'){
        friendlyCoords.push({x: x, y: y})
      }
    })
  })

  return friendlyCoords;
}

export function moveNoCheck(board: TileConfig[][], whiteTurn: boolean, friendlyCoords: coords[]){
  let canMove: boolean = false;
  friendlyCoords.forEach(pieceCoords => {
    board.forEach((row: TileConfig[], y: number) => {
      row.forEach((tile: TileConfig, x: number) => {
        if (pieceChooser(board[pieceCoords.y][pieceCoords.x].type)
            .canMove(board, pieceCoords.x, pieceCoords.y, x, y, whiteTurn)){
          let _board = boardCopier(board);
          _board[y][x] = _board[pieceCoords.y][pieceCoords.x];
          _board[pieceCoords.y][pieceCoords.x] = {"type": "empty", "color": "neutral"};
          if (!inCheck(_board, whiteTurn)){
            canMove = true;
          }
        }
      })
    })
  })
  return canMove;
}