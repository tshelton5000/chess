import Knight from './Knight';
import midplayBoard from '../../../testBoards/midplayBoard.json';

it('Knight constuctor correctly assigns pics based upon input strings', () => {
  let sampleKnight = new Knight('WN', 'BN');
  expect(sampleKnight.whitePic).toBe('WN');
  expect(sampleKnight.blackPic).toBe('BN');
})

it('Knight.isLMove identifies a knight\'s l moves', () => {
  let sampleKnight = new Knight('WN', 'BN');
  expect(sampleKnight.isLMove(0, 0, 1, 2)).toBe(true);
  expect(sampleKnight.isLMove(0, 0, 2, 1)).toBe(true);
  expect(sampleKnight.isLMove(0, 0, 2, 2)).toBe(false);
  expect(sampleKnight.isLMove(0, 0, 1, 1)).toBe(false);
})

it('Knight.canMove identifies correct landings', () => {
  let sampleKnight = new Knight('WN', 'BN');
  expect(sampleKnight.canMove(midplayBoard, 1, 3, 2, 1, true)).toBe(true);
  expect(sampleKnight.canMove(midplayBoard, 1, 3, 0, 1, true)).toBe(true);
  expect(sampleKnight.canMove(midplayBoard, 2, 4, 1, 6, false)).toBe(true);
  expect(sampleKnight.canMove(midplayBoard, 2, 4, 0, 5, false)).toBe(true);
  expect(sampleKnight.canMove(midplayBoard, 2, 4, 4, 3, false)).toBe(false);
})