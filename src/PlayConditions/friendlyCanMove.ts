import pieceChooser from '../helpers/pieceChooser';
import boardCopier from '../helpers/boardCopier';
import inCheck from './inCheck';
import {TileConfig} from '../components/Board/Board';
import {coords} from './inCheck';

function friendlyCanMove(board: TileConfig[][], whiteTurn: boolean){
  let friendlyCoords: coords[] = [];
  board.forEach((row: TileConfig[], y: number) => {
    row.forEach((tile: TileConfig, x: number) => {
      if (whiteTurn ? tile.color === 'white' : tile.color === 'black'){
        friendlyCoords.push({x: x, y: y})
      }
    })
  })

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

export default friendlyCanMove;

// kingCanMove(board, whiteTurn){
  //   let kingX;
  //   let kingY;
  //   board.forEach((row, y) => {
  //     row.forEach((tile, x) => {
  //       let playerColor = whiteTurn ? 'white' : 'black';
  //       if (tile.type === 'king' && tile.color === playerColor){
  //         kingX = x;
  //         kingY = y;
  //       }
  //     })
  //   })

  //   let possibleMoves = [];
  //   board.forEach((row, y) => {
  //     row.forEach((tile, x) => {
  //       if (pieceCollection.king.canMove(board, kingX, kingY, x, y, whiteTurn)){
  //         possibleMoves.push({x: x, y: y})
  //       }
  //     })
  //   })
    
  //   let canMove = false;
  //   possibleMoves.forEach(destination => {
  //     let _board = this.boardCopier(board);
  //     _board[destination.y][destination.x] = _board[kingY][kingX];
  //     _board[kingY][kingX] = {"type": "empty", "color": "neutral"};
  //     if (!this.inCheck(_board, whiteTurn)){
  //       canMove = true;
  //     }
  //   })

  //   return (canMove && possibleMoves.length > 0);
  // }

  // pieceChooser(type){
  //   return pieceCollection[type];
  // }