import Piece from '../Piece';
import {PieceConstructor, PieceInterface} from '../Piece';
import {TileConfig} from '../../../components/Board/Board';

export interface KnightInterface extends PieceInterface{
  isLMove(x1: number, y1: number, x2: number, y2: number): boolean;
  canMove(board: TileConfig[][], x1: number, y1: number, x2: number, y2: number, whiteTurn: boolean): boolean;
}

interface KnightConstructor{
  new (whitePic: string, blackPic: string): KnightInterface;
}

const Knight: KnightConstructor = class Knight extends Piece implements KnightInterface{
  constructor(whitePic: string, blackPic: string){
    super(whitePic, blackPic);
  }

  isLMove(x1: number, y1: number, x2: number, y2: number): boolean{
    return ((Math.abs(x2 - x1) === 1 && Math.abs(y2 - y1) === 2) ||
             (Math.abs(x2 - x1) === 2 && Math.abs(y2 - y1) === 1))
  }

  canMove(board: TileConfig[][], x1: number, y1: number, x2: number, y2: number, whiteTurn: boolean): boolean{
    if (this.colorTurn(board, y1, x1, whiteTurn)){
      return (this.isLMove(x1, y1, x2, y2) && 
            (this.isClear(board, y2, x2) || this.isEnemy(board, y2, x2, whiteTurn)))
    }
    return false;
  }
}

export default Knight;