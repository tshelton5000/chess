import {TileConfig} from '../../components/Board/Board';

export interface PieceConstructor{
  new (whitePic: string, blackPic: string): PieceInterface;
}

export interface PieceInterface {
  whitePic: string;
  blackPic: string;
  returnPic(color: string): string;
  isClear(board: TileConfig[][], y: number, x: number): boolean;
  isEnemy(board: TileConfig[][], y: number, x: number, whiteTurn: boolean): boolean;
  colorTurn(board: TileConfig[][], y: number, x: number, whiteTurn: boolean): boolean;
  cardinalMove(board: TileConfig[][], x1: number, y1: number, x2: number, y2: number): boolean;
  diagonalMove(board: TileConfig[][], x1: number, y1: number, x2: number, y2: number): boolean;
}

const Piece: PieceConstructor = class Piece implements PieceInterface{
  whitePic: string;
  blackPic: string;
  constructor(whitePic: string, blackPic: string){
    this.whitePic = whitePic;
    this.blackPic = blackPic;
  }

  returnPic(color:string): string{
    return color === 'white' ? this.whitePic : this.blackPic;
  }

  isClear(board: TileConfig[][], y: number, x: number): boolean {
    return board[y][x].color === 'neutral';
  }

  isEnemy(board: TileConfig[][], y: number, x: number, whiteTurn: boolean): boolean{
    return whiteTurn ? board[y][x].color === 'black' : board[y][x].color === 'white';
  }

  colorTurn(board:TileConfig[][] , y: number, x: number, whiteTurn: boolean): boolean{
    return whiteTurn ? board[y][x].color === 'white' : board[y][x].color === 'black';
  }

  cardinalMove(board: TileConfig[][], x1: number, y1: number, x2: number, y2: number): boolean{
    if (x1 !== x2 && y1 !== y2){
      return false;
    }
    const yAxis: boolean = (x1 === x2) ? true : false;
    const start: number = yAxis && y1 <= y2 ? y1 : yAxis ? y2 : x1 <= x2 ? x1 : x2;
    const end: number = yAxis && y1 <= y2 ? y2 : yAxis ? y1 : x1 <= x2 ? x2 : x1;

    for (let i = start + 1; i < end; i++){
      if (yAxis && !this.isClear(board, i, x1)){
        return false;
      } else if (!yAxis && !this.isClear(board, y1, i)){
        return false;
      }
    }
    return true;
  }

  diagonalMove(board: TileConfig[][], x1: number, y1: number, x2: number, y2: number): boolean{
    if (Math.abs(x1 - x2) !== Math.abs(y1 - y2)){
      return false;
    }
    const posSlope: boolean = (x1 < x2 && y1 < y2 || x2 < x1 && y2 < y1) ? true : false;
    const startX: number = (x1 < x2) ? x1 : x2;
    const startY: number = (posSlope && y1 < y2) ? y1 : (posSlope) ? y2 : (y1 < y2) ? y2 : y1;

    for (let i = 1; i < Math.abs(x1 - x2); i++){
      if (!this.isClear(board, posSlope ? startY + i : startY - i, startX + i)){
        return false;
      }
    }
    return true;
  }
}

export default Piece;