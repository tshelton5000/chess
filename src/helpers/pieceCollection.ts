import King from '../Pieces/Piece/King/King';
import Queen from '../Pieces/Piece/Queen/Queen';
import Knight from '../Pieces/Piece/Knight/Knight';
import Bishop from '../Pieces/Piece/Bishop/Bishop';
import Rook from '../Pieces/Piece/Rook/Rook';
import Pawn from '../Pieces/Piece/Pawn/Pawn';
import Empty from '../Pieces/Empty/Empty';

import {KingInterface} from '../Pieces/Piece/King/King'
import {QueenInterface} from '../Pieces/Piece/Queen/Queen';
import {KnightInterface} from '../Pieces/Piece/Knight/Knight';
import {BishopInterface} from '../Pieces/Piece/Bishop/Bishop';
import {RookInterface} from '../Pieces/Piece/Rook/Rook';
import {PawnInterface} from '../Pieces/Piece/Pawn/Pawn';
import {EmptyInterface} from '../Pieces/Empty/Empty';

import blackBishop from '../assets/black-bishop.png';
import blackKing from '../assets/black-king.png';
import blackKnight from '../assets/black-knight.png';
import blackPawn from '../assets/black-pawn.png';
import blackQueen from '../assets/black-queen.png';
import blackRook from '../assets/black-rook.png';
import whiteBishop from '../assets/white-bishop.png';
import whiteKing from '../assets/white-king.png';
import whiteKnight from '../assets/white-knight.png';
import whitePawn from '../assets/white-pawn.png';
import whiteQueen from '../assets/white-queen.png';
import whiteRook from '../assets/white-rook.png';

export interface collectionInterface{
  king: KingInterface,
  queen: QueenInterface,
  rook: RookInterface,
  bishop: BishopInterface,
  knight: KnightInterface,
  pawn: PawnInterface,
  empty: EmptyInterface
  [propName: string]: KingInterface | QueenInterface | RookInterface |
    BishopInterface | KnightInterface | PawnInterface | EmptyInterface
}

const pieceCollection:collectionInterface = {
  king: new King(whiteKing, blackKing),
  queen: new Queen(whiteQueen, blackQueen),
  rook: new Rook(whiteRook, blackRook),
  bishop: new Bishop(whiteBishop, blackBishop),
  knight: new Knight(whiteKnight, blackKnight),
  pawn: new Pawn(whitePawn, blackPawn),
  empty: new Empty('')
}

export default pieceCollection;