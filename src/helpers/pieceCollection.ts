import King from '../Pieces/Piece/King/King';
import Queen from '../Pieces/Piece/Queen/Queen';
import Knight from '../Pieces/Piece/Knight/Knight';
import Bishop from '../Pieces/Piece/Bishop/Bishop';
import Rook from '../Pieces/Piece/Rook/Rook';
import Pawn from '../Pieces/Piece/Pawn/Pawn';
import Empty from '../Pieces/Empty/Empty';

import {PieceInterface} from '../Pieces/Piece/Piece';
import {KingInterface} from '../Pieces/Piece/King/King'
import {QueenInterface} from '../Pieces/Piece/Queen/Queen';
import {KnightInterface} from '../Pieces/Piece/Knight/Knight';
import {BishopInterface} from '../Pieces/Piece/Bishop/Bishop';
import {RookInterface} from '../Pieces/Piece/Rook/Rook';
import {PawnInterface} from '../Pieces/Piece/Pawn/Pawn';
import {EmptyInterface} from '../Pieces/Empty/Empty';

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
  king: new King('WK', 'BK'),
  queen: new Queen('WQ', 'BQ'),
  rook: new Rook('WR', 'BR'),
  bishop: new Bishop('WB', 'BB'),
  knight: new Knight('WN', 'BN'),
  pawn: new Pawn('WP', 'BP'),
  empty: new Empty('--')
}

export default pieceCollection;