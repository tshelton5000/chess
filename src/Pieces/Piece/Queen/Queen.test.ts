import Queen from './Queen';
import blackCheckBoard from '../../../testBoards/blackCheckBoard.json';

it('Queen constructor stores the input strings as pic properties', () => {
  let sampleQueen = new Queen('WQ', 'BQ');
  expect(sampleQueen.blackPic).toBe('BQ');
  expect(sampleQueen.whitePic).toBe('WQ');
})

it('Queen.canMove correctly identifies cardinal/diagonal movement', () => {
  let sampleQueen = new Queen('WQ', 'BQ');
  expect(sampleQueen.canMove(blackCheckBoard, 4, 3, 4, 0, false)).toBe(true);
  expect(sampleQueen.canMove(blackCheckBoard, 4, 3, 2, 5, false)).toBe(true);
  expect(sampleQueen.canMove(blackCheckBoard, 4, 3, 2, 4, false)).toBe(false);
})

it('Queen.canMove correctly identifies free, enemy, allied landings', () => {
  let sampleQueen = new Queen('WQ', 'BQ');
  expect(sampleQueen.canMove(blackCheckBoard, 4, 3, 0, 3, false)).toBe(true);
  expect(sampleQueen.canMove(blackCheckBoard, 4, 3, 6, 3, false)).toBe(true);
  expect(sampleQueen.canMove(blackCheckBoard, 4, 3, 4, 4, false)).toBe(false);
})