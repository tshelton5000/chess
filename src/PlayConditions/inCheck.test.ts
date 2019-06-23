import inCheck, {enemiesFinder, enemiesCanCheck} from './inCheck';
import startingBoard from '../testBoards/startingBoard.json';
import midplayBoard from '../testBoards/midplayBoard.json';
import blackCheckBoard from '../testBoards/blackCheckBoard.json';
import whiteCheckBoard from '../testBoards/whiteCheckBoard.json';

var cloneDeep = require('clone-deep');

it('enemiesFinder returns an array of coords array, num, and num', () => {
  let returnArr = enemiesFinder(startingBoard, true);
  expect(returnArr.length).toBe(3);
  expect(returnArr[0][0]).toHaveProperty('x');
  expect(returnArr[0][0]).toHaveProperty('y');
  expect(typeof returnArr[1]).toBe('number');
  expect(typeof returnArr[2]).toBe('number');
})

it('enemiesFinder returns a correct array of enemy positions', () => {
  let enemyArr = enemiesFinder(startingBoard, true)[0];
  let expectedArr = [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0},
    {x: 4, y: 0}, {x: 5, y: 0}, {x: 6, y: 0}, {x: 7, y: 0}, {x: 0, y: 1},
    {x: 1, y: 1}, {x: 2, y: 1}, {x: 3, y: 1}, {x: 4, y: 1}, {x: 5, y: 1},
    {x: 6, y: 1}, {x: 7, y: 1}]
  expect(enemyArr).toStrictEqual(expectedArr);
})

it('enemiesFinder identifies the king position', () => {
  let [,kingX, kingY] = enemiesFinder(startingBoard, true);
  expect(kingX).toBe(4);
  expect(kingY).toBe(7);
})

it('enemiesCanCheck returns false for starting board', () => {
  let enemyArr = [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0},
    {x: 4, y: 0}, {x: 5, y: 0}, {x: 6, y: 0}, {x: 7, y: 0}, {x: 0, y: 1},
    {x: 1, y: 1}, {x: 2, y: 1}, {x: 3, y: 1}, {x: 4, y: 1}, {x: 5, y: 1},
    {x: 6, y: 1}, {x: 7, y: 1}]
  let returnBool = enemiesCanCheck(startingBoard, enemyArr, 4, 7, true);
  expect(returnBool).toBe(false);
})

it('inCheck treats the board immutably', () => {
  const board = cloneDeep(startingBoard);
  const inputBoard = cloneDeep(startingBoard);
  inCheck(inputBoard, true);
  expect(board).toStrictEqual(inputBoard);
})

it('inCheck returns a boolean', () => {
  let returnBool = inCheck(startingBoard, false);
  expect(typeof returnBool).toBe('boolean');
})

it('inCheck returns false for starting board and white turn', () => {
  let returnBool = inCheck(startingBoard, true);
  expect(returnBool).toBe(false);
})

it('inCheck returns false for starting board and black turn', () => {
  let returnBool = inCheck(startingBoard, false);
  expect(returnBool).toBe(false);
})

it('inCheck returns false for midplay board and white turn', () => {
  let returnBool = inCheck(midplayBoard, true);
  expect(returnBool).toBe(false);
})

it('inCheck returns false for midplay board and black turn', () => {
  let returnBool = inCheck(midplayBoard, false);
  expect(returnBool).toBe(false);
})

it('inCheck returns true for blackCheck board and black turn', () => {
  let returnBool = inCheck(blackCheckBoard, false);
  expect(returnBool).toBe(true);
})

it('inCheck returns false for blackCheck board and white turn', () => {
  let returnBool = inCheck(blackCheckBoard, true);
  expect(returnBool).toBe(false);
})

it('inCheck returns false for whiteCheck board and black turn', () => {
  let returnBool = inCheck(whiteCheckBoard, false);
  expect(returnBool).toBe(false);
})

it('inCheck returns true for whiteCheck board and white turn', () => {
  let returnBool = inCheck(whiteCheckBoard, true);
  expect(returnBool).toBe(true);
})