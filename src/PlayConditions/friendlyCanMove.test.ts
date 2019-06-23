import friendlyCanMove, {friendlyFinder, moveNoCheck} from './friendlyCanMove';
import startingBoard from '../testBoards/startingBoard.json';
import midplayBoard from '../testBoards/midplayBoard.json';
import whiteCheckBoard from '../testBoards/whiteCheckBoard.json';
import blackCheckBoard from '../testBoards/blackCheckBoard.json';
import whiteCMateboard from '../testBoards/whiteCMateBoard.json';
import blackCMateBoard from '../testBoards/blackCMateBoard.json';
import blackStaleBoard from '../testBoards/blackStaleBoard.json';
import whiteStaleBoard from '../testBoards/whiteStaleBoard.json';

it('friendlyFinder finds white piece positions with start board & white turn', () => {
  let alliedPositions = [{x:0 ,y:6}, {x:1,y:6}, {x:2 ,y:6}, {x:3,y:6},{x:4 ,y:6}, 
    {x:5,y:6},{x:6 ,y:6}, {x:7,y:6},{x:0 ,y:7}, {x:1,y:7},{x:2 ,y:7}, {x:3,y:7},
    {x:4 ,y:7}, {x:5,y:7},{x:6 ,y:7}, {x:7,y:7}];
  let returnedPositions = friendlyFinder(startingBoard, true);
  expect(alliedPositions).toStrictEqual(returnedPositions);
})

it('friendlyFinder finds black piece positions with start board & black turn', () => {
  let alliedPositions = [{x:0 ,y:0}, {x:1,y:0}, {x:2 ,y:0}, {x:3,y:0},{x:4 ,y:0}, 
    {x:5,y:0},{x:6 ,y:0}, {x:7,y:0},{x:0 ,y:1}, {x:1,y:1},{x:2 ,y:1}, {x:3,y:1},
    {x:4 ,y:1}, {x:5,y:1},{x:6 ,y:1}, {x:7,y:1}];
  let returnedPositions = friendlyFinder(startingBoard, false);
  expect(alliedPositions).toStrictEqual(returnedPositions);
})

it('friendlyFinder finds white piece positions with midplay board & white turn', () => {
  let alliedPositions = [{x:6 ,y:2}, {x:1,y:3}, {x:1 ,y:5}, {x:4,y:5},{x:0 ,y:6}, 
    {x:1,y:6},{x:5 ,y:6}, {x:6,y:6}, {x:0,y:7},{x:2 ,y:7}, {x:5,y:7}];
    let returnedPositions = friendlyFinder(midplayBoard, true);
    expect(returnedPositions).toStrictEqual(alliedPositions);
})

it('friendlyFinder finds black piece positions with midplay board & black turn', () => {
  let alliedPositions = [{x:0 ,y:0}, {x:5,y:0}, {x:7 ,y:0}, {x:0,y:1},{x:1 ,y:1}, 
    {x:1,y:2},{x:2 ,y:2}, {x:4,y:2}, {x:4,y:3},{x:5,y:3}, {x:2,y:4}, {x:7 ,y:6}];
    let returnedPositions = friendlyFinder(midplayBoard, false);
    expect(returnedPositions).toStrictEqual(alliedPositions);
})

it('moveNoCheck returns true for startingBoard and white turn', () => {
  let alliedPositions = [{x:0 ,y:6}, {x:1,y:6}, {x:2 ,y:6}, {x:3,y:6},{x:4 ,y:6}, 
    {x:5,y:6},{x:6 ,y:6}, {x:7,y:6},{x:0 ,y:7}, {x:1,y:7},{x:2 ,y:7}, {x:3,y:7},
    {x:4 ,y:7}, {x:5,y:7},{x:6 ,y:7}, {x:7,y:7}];
  expect(moveNoCheck(startingBoard, true, alliedPositions)).toBe(true);
})

it('moveNoCheck returns true for startingBoard and black turn', () => {
  let alliedPositions = [{x:0 ,y:0}, {x:1,y:0}, {x:2 ,y:0}, {x:3,y:0},{x:4 ,y:0}, 
    {x:5,y:0},{x:6 ,y:0}, {x:7,y:0},{x:0 ,y:1}, {x:1,y:1},{x:2 ,y:1}, {x:3,y:1},
    {x:4 ,y:1}, {x:5,y:1},{x:6 ,y:1}, {x:7,y:1}];
  expect(moveNoCheck(startingBoard, false, alliedPositions)).toBe(true);
})

it('moveNoCheck returns true for midplayBoard and white turn', () => {
  let alliedPositions = [{x:6 ,y:2}, {x:1,y:3}, {x:1 ,y:5}, {x:4,y:5},{x:0 ,y:6}, 
    {x:1,y:6},{x:5 ,y:6}, {x:6,y:6}, {x:0,y:7},{x:2 ,y:7}, {x:5,y:7}];
  expect(moveNoCheck(midplayBoard, true, alliedPositions)).toBe(true);
})

it('moveNoCheck returns true for midplayBoard and black turn', () => {
  let alliedPositions = [{x:0 ,y:0}, {x:5,y:0}, {x:7 ,y:0}, {x:0,y:1},{x:1 ,y:1}, 
    {x:1,y:2},{x:2 ,y:2}, {x:4,y:2}, {x:4,y:3},{x:5,y:3}, {x:2,y:4}, {x:7 ,y:6}];
  expect(moveNoCheck(midplayBoard, false, alliedPositions)).toBe(true);
})

it('moveNoCheck returns true for whiteCheckBoard and white turn', () => {
  let alliedPositions = [{x:0 ,y:0}, {x:1,y:0}, {x:2 ,y:0}, {x:3,y:0},{x:5 ,y:0}, 
    {x:7,y:0},{x:0 ,y:1}, {x:1,y:1}, {x:5,y:1},{x:6,y:1}, {x:7,y:1}, {x:2 ,y:2},
    {x:4 ,y:3}, {x:4, y: 4}];
  expect(moveNoCheck(whiteCheckBoard, true, alliedPositions)).toBe(true);
})

it('moveNoCheck returns true for blackCheckBoard and black turn', () => {
  let alliedPositions = [{x:0 ,y:0}, {x:1,y:0}, {x:2 ,y:0}, {x:3,y:0},{x:5 ,y:0}, 
    {x:7,y:0},{x:0 ,y:1}, {x:1,y:1}, {x:5,y:1},{x:6,y:1}, {x:7,y:1}, {x:2 ,y:2},
    {x:4 ,y:3}, {x:4, y: 4}];
  expect(moveNoCheck(blackCheckBoard, false, alliedPositions)).toBe(true);
})

it('moveNoCheck returns false for whiteCMateboard and white turn', () => {
  let alliedPositions = [{x:0 ,y:0}, {x:1,y:0}, {x:2 ,y:0}, {x:3,y:0},{x:5 ,y:0}, 
    {x:7,y:0},{x:0 ,y:1}, {x:1,y:1}, {x:5,y:1},{x:6,y:1}, {x:7,y:1}, {x:2 ,y:2},
    {x:4 ,y:3}, {x:4, y: 4}];
    expect(moveNoCheck(whiteCMateboard, true, alliedPositions)).toBe(false);
})

it('moveNoCheck returns false for blackCMateBoard and black turn', () => {
  let alliedPositions = [{x:3 ,y:2}, {x:2,y:3}, {x:1 ,y:4}, {x:3,y:4}, {x:0, y:1}];
    expect(moveNoCheck(blackCMateBoard, false, alliedPositions)).toBe(false);
})

it('moveNoCheck returns false for blackStaleBoard and black turn', () => {
  let alliedPositions = [{x: 2, y: 1}, {x:0, y: 2}, {x: 2, y: 3}];
  expect(moveNoCheck(blackStaleBoard, false, alliedPositions)).toBe(false);
})

it('moveNoCheck returns false for whiteStaleBoard and white turn', () => {
  let alliedPositions = [{x: 3, y: 4}, {x: 6, y: 4}, {x: 5, y: 5}, {x:4, y:6}];
  expect(moveNoCheck(whiteStaleBoard, true, alliedPositions)).toBe(false);
})

it('friendlyCanMove returns true with blackCheckBoard and black turn', () => {
  expect(friendlyCanMove(blackCheckBoard, false)).toBe(true);
})

it('friendlyCanMove returns true with whiteCheckBoard and white turn', () => {
  expect(friendlyCanMove(whiteCheckBoard, true)).toBe(true);
})

it('friendlyCanMove returns false with blackCMateBoard and black turn', () => {
  expect(friendlyCanMove(blackCMateBoard, false)).toBe(false);
})

it('friendlyCanMove returns false with whiteCMateBoard and white turn', () => {
  expect(friendlyCanMove(whiteCMateboard, true)).toBe(false);
})

it('friendlyCanMove returns false with blackStaleBoard and black turn', () => {
  expect(friendlyCanMove(blackStaleBoard, false)).toBe(false);
})

it('friendlyCanMove returns false with whiteStaleBoard and white turn', () => {
  expect(friendlyCanMove(whiteStaleBoard, true)).toBe(false);
})