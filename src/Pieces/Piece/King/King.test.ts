import King from './King';
import midplayBoard from '../../../testBoards/midplayBoard.json';

it('King constructor assigns whitePic and blackPic from input strings', () => {
  let sampleKing = new King('WK', 'BK');
  expect(sampleKing.whitePic).toBe('WK');
  expect(sampleKing.blackPic).toBe('BK');
})

it('King.oneSpaceAway identifies valid distances for king', () => {
  let sampleKing = new King('WK', 'BK');
  expect(sampleKing.oneSpaceAway(0, 0, 1, 1)).toBe(true);
  expect(sampleKing.oneSpaceAway(1, 1, 1, 0)).toBe(true);
  expect(sampleKing.oneSpaceAway(1, 1, 0, 1)).toBe(true);
  expect(sampleKing.oneSpaceAway(1, 1, 2, 3)).toBe(false);
})

it('King.canMove identifies valid landings', () => {
  let sampleKing = new King('WK', 'BK');
  expect(sampleKing.canMove(midplayBoard, 2, 2, 1, 3, false)).toBe(true);
  expect(sampleKing.canMove(midplayBoard, 2, 2, 2, 3, false)).toBe(true);
  expect(sampleKing.canMove(midplayBoard, 2, 2, 1, 2, false)).toBe(false);
})