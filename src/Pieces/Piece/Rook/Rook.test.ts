import Rook from './Rook';
import blackCheckBoard from '../../../testBoards/blackCheckBoard.json';

it('Rook constructor stores string input values as pic properties', () => {
  let sampleRook = new Rook('WR', 'BR');
  expect(sampleRook.whitePic).toBe('WR');
  expect(sampleRook.blackPic).toBe('BR');
})

it('Rook.canMove correctly identifies cardinal moves', () => {
  let sampleRook = new Rook('WR', 'BR');
  expect(sampleRook.canMove(blackCheckBoard, 0, 0, 0, 2, false)).toBe(false);
  expect(sampleRook.canMove(blackCheckBoard, 3, 7, 3, 0, true)).toBe(true);
})

it('Rook.canMove correctly identifies empty, enemy, and friendly landings', () => {
  let sampleRook = new Rook('WR', 'BR');
  expect(sampleRook.canMove(blackCheckBoard, 7, 0, 6, 0, false)).toBe(true);
  expect(sampleRook.canMove(blackCheckBoard, 3, 7, 5, 7, true)).toBe(false);
  expect(sampleRook.canMove(blackCheckBoard, 3, 7, 3, 0, true)).toBe(true);
})