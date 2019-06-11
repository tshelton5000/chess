import Piece from '../Piece';
import {PieceConstructor, PieceInterface} from '../Piece';
import {TileConfig} from '../../../components/Board/Board';

export interface KingInterface extends PieceInterface{
  oneSpaceAway(x1: number, y1: number, x2: number, y2: number): boolean;
  canMove(board: TileConfig[][], x1: number, y1: number, x2: number, y2: number, whiteTurn: boolean): boolean;
}

interface KingConstructor{
  new (whitePic: string, blackPic: string): KingInterface;
}

const King: KingConstructor = class King extends Piece implements KingInterface{
  constructor(whitePic: string, blackPic: string){
    super(whitePic, blackPic);
  }

  oneSpaceAway(x1: number, y1: number, x2: number, y2: number){
    let xDelta = Math.abs(x2 - x1);
    let yDelta = Math.abs(y2 - y1);
    return ((xDelta === 1 && y2 === y1) || 
            (yDelta === 1 && x2 === x1) ||
            (xDelta === 1 && yDelta === 1));
  }

  canMove(board: TileConfig[][], x1: number, y1: number, x2: number, y2: number, whiteTurn: boolean){
    if (this.colorTurn(board, y1, x1, whiteTurn)){
      return (this.oneSpaceAway(x1, y1, x2, y2) && 
            (this.isClear(board, y2, x2) || this.isEnemy(board, y2, x2, whiteTurn)))
    }
    return false;
  }
}

export default King;