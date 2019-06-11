import pieceCollection from './pieceCollection';
import {KingInterface} from '../Pieces/Piece/King/King'
import {QueenInterface} from '../Pieces/Piece/Queen/Queen';
import {KnightInterface} from '../Pieces/Piece/Knight/Knight';
import {BishopInterface} from '../Pieces/Piece/Bishop/Bishop';
import {RookInterface} from '../Pieces/Piece/Rook/Rook';
import {PawnInterface} from '../Pieces/Piece/Pawn/Pawn';
import {EmptyInterface} from '../Pieces/Empty/Empty';

function pieceChooser(type: string): KingInterface |
  QueenInterface | KnightInterface | BishopInterface | RookInterface |
  PawnInterface | EmptyInterface {
  return pieceCollection[type];
}

export default pieceChooser;