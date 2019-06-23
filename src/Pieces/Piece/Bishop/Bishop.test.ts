import Bishop from './Bishop';
import midplayBoard from '../../../testBoards/midplayBoard.json';

it('Bishop constructor stores whitePic and blackPic from input strings', () => {
  let sampleBishop = new Bishop('WB', 'BB');
  expect(sampleBishop.blackPic).toBe('BB');
  expect(sampleBishop.whitePic).toBe('WB');
})

it('Bishop.canMove identifies landings correctly', () => {
  let sampleBishop = new Bishop('WB', 'BB');
  expect(sampleBishop.canMove(midplayBoard, 4, 5, 6, 7, true)).toBe(false);
  expect(sampleBishop.canMove(midplayBoard, 4, 5, 2, 3, true)).toBe(true);
  expect(sampleBishop.canMove(midplayBoard, 6, 2, 5, 3, true)).toBe(true);
  expect(sampleBishop.canMove(midplayBoard, 6, 2, 4, 0, true)).toBe(true);
})