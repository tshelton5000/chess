import pieceChooser from './pieceChooser';
import King from '../Pieces/Piece/King/King';
import Empty from '../Pieces/Empty/Empty';

it('pieceChooser is called with string piece type', () => {
  let pieceChooser = jest.fn();
  pieceChooser('king');
  expect(pieceChooser.mock.calls[0][0]).toBe('king');
})

it('pieceChooser returns king for king argument', () => {
  let king = new King('white-king.png', 'black-king.png');
  let returnPiece = pieceChooser('king');
  expect(king).toStrictEqual(returnPiece);
})

it('pieceChooser returns empty for empty argument', () => {
  let empty = new Empty('');
  let returnPiece = pieceChooser('empty');
  expect(empty).toStrictEqual(returnPiece);
})

it('pieceChooser returns undefined for non-collection piece argument', () => {
  let returnPiece = pieceChooser('white checker');
  expect(returnPiece).toEqual(undefined);
})