import Piece from '../Piece';
import {PieceConstructor, PieceInterface} from '../Piece';
import {TileConfig} from '../../../components/Board/Board';

export interface PawnInterface extends PieceInterface{
  vertCheck(x1: number, y1: number, x2: number, y2: number, whiteTurn: boolean): boolean;
  diagCheck(x1: number, y1: number, x2: number, y2: number, whiteTurn: boolean): boolean;
  canMove(board: TileConfig[][], x1: number, y1: number, x2: number, y2: number, whiteTurn: boolean): boolean;
}

interface PawnConstructor{
  new (whitePic: string, blackPic: string): PawnInterface;
}

const Pawn: PawnConstructor = class Pawn extends Piece implements PawnInterface{
  constructor(whitePic: string, blackPic: string){
    super(whitePic, blackPic);
  }

  vertCheck(x1: number, y1: number, x2: number, y2: number, whiteTurn: boolean): boolean{
    if (x1 === x2){
      return whiteTurn ? y1 - y2 === 1 : y2 - y1 === 1;
    }
    return false;
  }

  diagCheck(x1: number, y1: number, x2: number, y2: number, whiteTurn: boolean): boolean{
    return whiteTurn ? (y1 - y2 === 1 && Math.abs(x2 - x1) === 1) :
                       (y2 - y1 === 1 && Math.abs(x2 - x1) === 1);
  }

  canMove(board: TileConfig[][], x1: number, y1: number, x2: number, y2: number, whiteTurn: boolean): boolean{
    if (this.colorTurn(board, y1, x1, whiteTurn)){
      return((this.vertCheck(x1, y1, x2, y2, whiteTurn) && this.isClear(board, y2, x2)) ||
           (this.diagCheck(x1, y1, x2, y2, whiteTurn) && this.isEnemy(board, y2, x2, whiteTurn)))
    }
    return false;
  }
}

export default Pawn;