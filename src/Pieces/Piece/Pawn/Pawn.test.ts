import Pawn from './Pawn';
import pawnsBoard from '../../../testBoards/pawnsBoard.json';

it('Pawn constructor stores string inputs as pic propertes', () => {
  let samplePawn = new Pawn('WP', 'BP');
  expect(samplePawn.whitePic).toBe('WP')
  expect(samplePawn.blackPic).toBe('BP');
})

it('Pawn.vertCheck identifies a vert move based upon player turn', () => {
  let samplePawn = new Pawn('WP', 'BP');
  expect(samplePawn.vertCheck(6, 6, 6, 5, true)).toBe(true);
  expect(samplePawn.vertCheck(6, 6, 6, 7, true)).toBe(false);
  expect(samplePawn.vertCheck(6, 6, 5, 5, true)).toBe(false);
  expect(samplePawn.vertCheck(6, 1, 6, 2, false)).toBe(true);
  expect(samplePawn.vertCheck(6, 1, 6, 0, false)).toBe(false);
  expect(samplePawn.vertCheck(6, 1, 5, 2, false)).toBe(false);
})

it('Pawn.diagCheck identifies a diag move based upon player turn', () => {
  let samplePawn = new Pawn('WP', 'BP');
  expect(samplePawn.diagCheck(6, 6, 5, 5, true)).toBe(true);
  expect(samplePawn.diagCheck(6, 6, 6, 7, true)).toBe(false);
  expect(samplePawn.diagCheck(6, 1, 5, 2, false)).toBe(true);
  expect(samplePawn.diagCheck(6, 1, 6, 2, false)).toBe(false);
})

it('Pawn.canMove identifies proper attacks, moves, and invalid moves', () => {
  let samplePawn = new Pawn('WP', 'BP');
  expect(samplePawn.canMove(pawnsBoard, 1, 6, 2, 5, true)).toBe(true);
  expect(samplePawn.canMove(pawnsBoard, 1, 6, 0, 5, true)).toBe(false);
  expect(samplePawn.canMove(pawnsBoard, 1, 6, 1, 5, true)).toBe(false);
  expect(samplePawn.canMove(pawnsBoard, 1, 6, 1, 7, true)).toBe(false);
  expect(samplePawn.canMove(pawnsBoard, 5, 3, 4, 4, false)).toBe(true);
  expect(samplePawn.canMove(pawnsBoard, 5, 3, 5, 4, false)).toBe(true);
  expect(samplePawn.canMove(pawnsBoard, 5, 3, 5, 5, false)).toBe(false);
  expect(samplePawn.canMove(pawnsBoard, 5, 3, 5, 2, false)).toBe(false);
})