import Piece from './Piece';
import board from '../../components/initConfig/board.json';
import blackCheckBoard from '../../testBoards/blackCheckBoard.json';

it('This test doesn\'t mean much--it verifies that I can test mock classes', () => {
  const mockReturnPic = jest.fn().mockImplementationOnce((arg) => {
    return arg;
  })
  const Piece = jest.fn().mockImplementationOnce(() => {
    return {returnPic: mockReturnPic}
  })
  const sampPiece = new Piece();
  const returnData = sampPiece.returnPic('straight nasty');
  expect(Piece).toBeCalledTimes(1);
  expect(mockReturnPic.mock.calls[0][0]).toBe('straight nasty');
  expect(returnData).toBe('straight nasty');
})

it('Piece constructor sets the whitePic and blackPic properties in the Piece class', () => {
  let samplePiece = new Piece('WQ', 'BQ');
  expect(samplePiece.whitePic).toBe('WQ');
  expect(samplePiece.blackPic).toBe('BQ');
})

it('Piece.returnPic identifies the correct Pic based upon input', () => {
  let samplePiece = new Piece('WQ', 'BQ');
  expect(samplePiece.returnPic('white')).toBe('WQ');
  expect(samplePiece.returnPic('black')).toBe('BQ'); 
})

it('Piece.isClear identifies empty and occupied spaces correctly', () => {
  let samplePiece = new Piece('WQ', 'BQ');
  expect(samplePiece.isClear(board, 2, 2)).toBe(true);
  expect(samplePiece.isClear(board, 1,1)).toBe(false);
})

it('Piece.isEnemy identifies enemy pieces based upon whiteTurn', () => {
  let samplePiece = new Piece('WQ', 'BQ');
  expect(samplePiece.isEnemy(board, 1, 5, true)).toBe(true);
  expect(samplePiece.isEnemy(board, 4, 5, true)).toBe(false);
  expect(samplePiece.isEnemy(board, 7, 7, true)).toBe(false);
})

it('Piece.isEnemy identifies enemy pieces based upon blackTurn', () => {
  let samplePiece = new Piece('WQ', 'BQ');
  expect(samplePiece.isEnemy(board, 1, 5, false)).toBe(false);
  expect(samplePiece.isEnemy(board, 4, 5, false)).toBe(false);
  expect(samplePiece.isEnemy(board, 7, 7, false)).toBe(true);
})

it('Piece.colorTurn identifies own or non-own piece based upon whiteTurn', () => {
  let samplePiece = new Piece('WQ', 'BQ');
  expect(samplePiece.colorTurn(board, 1, 1, true)).toBe(false);
  expect(samplePiece.colorTurn(board, 4, 4, true)).toBe(false);
  expect(samplePiece.colorTurn(board, 7, 1, true)).toBe(true);
})

it('Piece.colorTurn identifies own or non-own piece based upon black', () => {
  let samplePiece = new Piece('WQ', 'BQ');
  expect(samplePiece.colorTurn(board, 1, 1, false)).toBe(true);
  expect(samplePiece.colorTurn(board, 4, 4, false)).toBe(false);
  expect(samplePiece.colorTurn(board, 7, 1, false)).toBe(false);
})

it('Piece.cardinalMove identifies cardinal moves with card/non-card inputs', () => {
  let samplePiece = new Piece('WQ', 'BQ');
  expect(samplePiece.cardinalMove(blackCheckBoard, 2, 4, 4, 1)).toBe(false);
  expect(samplePiece.cardinalMove(blackCheckBoard, 2, 4, 0, 4)).toBe(true);
})

it('Piece.cardinalMove identifies cardinal moves with occupied/free inputs', () => {
  let samplePiece = new Piece('WQ', 'BQ');
  expect(samplePiece.cardinalMove(blackCheckBoard, 2, 4, 5, 4)).toBe(false);
  expect(samplePiece.cardinalMove(blackCheckBoard, 5, 4, 5, 2)).toBe(true);
})

it('Piece.cardinalMove identifies moves with combos of non-card & occupied inputs', () => {
  let samplePiece = new Piece('WQ', 'BQ');
  expect(samplePiece.cardinalMove(blackCheckBoard, 2, 4, 0, 6)).toBe(false);
})

it('Piece.diagonalMove identifies diagonal moves correctly', () => {
  let samplePiece = new Piece('WQ', 'BQ');
  expect(samplePiece.diagonalMove(blackCheckBoard, 3, 3, 3, 0)).toBe(false);
  expect(samplePiece.diagonalMove(blackCheckBoard, 3, 3, 1, 5)).toBe(true);
})

it('Piece.diagonalMove identifies occupied/free diagonals correctly', () => {
  let samplePiece = new Piece('WQ', 'BQ');
  expect(samplePiece.diagonalMove(blackCheckBoard, 3, 3, 1, 5)).toBe(true);
  expect(samplePiece.diagonalMove(blackCheckBoard, 3, 3, 6, 0)).toBe(false);
})