import {TileConfig} from '../components/Board/Board'

function boardCopier(board: TileConfig[][]): TileConfig[][]{
  let _board: TileConfig[][] = [[]];
  board.forEach((row:TileConfig[], y:number) => {
    row.forEach((tile:TileConfig, x:number) => {
      if (y < _board.length){
        _board[y].push({type: tile.type, color: tile.color})
      } else {
        _board.push([{type: tile.type, color: tile.color}])
      }
    })
  })
  return _board;
}

export default boardCopier;