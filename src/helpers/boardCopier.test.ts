import boardCopier from './boardCopier';
import startingBoard from '../testBoards/startingBoard.json';
const cloneDeep = require('clone-deep');

it('boardCoper calls input board', () => {
  let boardCopier = jest.fn();
  let board = cloneDeep(startingBoard);
  boardCopier(board);
  expect(boardCopier.mock.calls[0][0]).toBe(board);
})

it('boardCopier treats input board as immutable', () => {
  let board = cloneDeep(startingBoard);
  let board2 = cloneDeep(startingBoard);
  boardCopier(board2);
  expect(board2).toStrictEqual(board);
})

it('boardCopier duplicates input board', () => {
  let board = cloneDeep(startingBoard);
  let returnBoard = boardCopier(board);
  expect(board).toStrictEqual(returnBoard);
})