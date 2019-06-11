import inCheck from './inCheck';
import startingBoard from '../testBoards/startingBoard.json';
import midplayBoard from '../testBoards/midplayBoard.json';
var cloneDeep = require('clone-deep');

it('inCheck treats the board and boolean params immutably', () => {
  const board = cloneDeep(startingBoard);
  const inputBoard = cloneDeep(startingBoard);
  const bool = true;
  const inputBool = true;
  inCheck(inputBoard, inputBool);
  expect(board).toStrictEqual(inputBoard);
  expect(bool).toEqual(inputBool);
})

it('inCheck returns a boolean with args of correct type', () => {
  const bool = false;
  let returnBool = inCheck(startingBoard, bool);
  expect(typeof returnBool).toBe('boolean');
})

it('inCheck returns false for starting board and white turn', () => {
  let bool = true;
  let returnBool = inCheck(startingBoard, bool);
  expect(returnBool).toBe(false);
})

it('inCheck returns false for starting board and black turn', () => {
  let bool = false;
  let returnBool = inCheck(startingBoard, bool);
  expect(returnBool).toBe(false);
})

it('inCheck returns false for midplay board and white turn', () => {
  let bool = true;
  let returnBool = inCheck(midplayBoard, bool);
  expect(returnBool).toBe(false);
})

it('inCheck returns false for midplay board and black turn', () => {
  let bool = false;
  let returnBool = inCheck(midplayBoard, bool);
  expect(returnBool).toBe(false);
})