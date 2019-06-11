import Piece from '../Piece';
import {PieceConstructor, PieceInterface} from '../Piece';
import {TileConfig} from '../../../components/Board/Board';

export interface QueenInterface extends PieceInterface{
  canMove(board: TileConfig[][], x1: number, y1: number, x2: number, y2: number, whiteTurn: boolean): boolean;
}

interface QueenConstructor{
  new (whitePic: string, blackPic: string): QueenInterface;
}

const Queen: QueenConstructor = class Queen extends Piece implements QueenInterface{
  constructor(whitePic: string, blackPic: string){
    super(whitePic, blackPic);
  }

  canMove(board: TileConfig[][], x1: number, y1: number, x2: number, y2: number, whiteTurn: boolean): boolean{
    if (this.colorTurn(board, y1, x1, whiteTurn)){
      return ((this.cardinalMove(board, x1, y1, x2, y2) || 
      this.diagonalMove(board, x1, y1, x2, y2)) &&
      (this.isClear(board, y2, x2) ||
      this.isEnemy(board, y2, x2, whiteTurn)));
    }
    return false;
  }
}

export default Queen;