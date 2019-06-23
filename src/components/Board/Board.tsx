import React, {useState, useEffect} from 'react';

import pieceChooser from '../../helpers/pieceChooser';
import boardCopier from '../../helpers/boardCopier';
import Tile from './Tile/Tile';
import inCheck from '../../PlayConditions/inCheck';
import friendlyCanMove from '../../PlayConditions/friendlyCanMove';
import initBoard from '../initConfig/board.json';
import boardTest from '../initConfig/boardTest.json';
import blackCheckBoard from '../../testBoards/blackCheckBoard.json';
import midplayBoard from '../../testBoards/midplayBoard.json';

export interface TileConfig{
  type: string;
  color: string;
}

const Board = () => {
  const [board, setBoard] = useState(midplayBoard);
  const [firstClick, setFirstClick] = useState();
  const [secondClick, setSecondClick] = useState();
  const [whiteTurn, setWhiteTurn] = useState(true);

  useEffect(() => {
    if (firstClick === undefined && secondClick === undefined){
      endChecker();
    } else if (firstClick !== undefined && secondClick !== undefined){
      // console.log(pieceChooser(board[firstClick.y][firstClick.x].type))
      // console.log(pieceChooser(board[firstClick.y][firstClick.x].type).canMove(board, firstClick.x, firstClick.y, secondClick.x, secondClick.y, whiteTurn));
      boardUpdater();
    }
  })

  const endChecker = () => {
    if (!friendlyCanMove(board, whiteTurn)){
          if (inCheck(board, whiteTurn)){
            console.log('checkmate!');
          } else {
            console.log('stalemate!');
          }
        }
  }

  const boardUpdater = () => {
    console.log('inCheck:' + inCheck(board, whiteTurn));
    console.log('friendliesCanMove:' + friendlyCanMove(board, whiteTurn));
    console.log('\n\n');

    if (pieceChooser(board[firstClick.y][firstClick.x].type)
        .canMove(board, firstClick.x, firstClick.y, secondClick.x, secondClick.y, whiteTurn)){
      const _board = boardCopier(board);
      _board[secondClick.y][secondClick.x] = board[firstClick.y][firstClick.x];
      _board[firstClick.y][firstClick.x] = {"type": "empty", "color": "neutral"};
      if (!inCheck(_board, whiteTurn)){
        setBoard(_board);
        setWhiteTurn(!whiteTurn);
      }
    }
    setFirstClick(undefined);
    setSecondClick(undefined);
  }

  const clickSelector = () => {
    return firstClick === undefined ? setFirstClick : setSecondClick;
  }

  const tileMapper = () => {
    return board.map((row, y) => row.map((square, x) => x === 7 ? 
    <><Tile key={`${x}${y}`} pic={pieceChooser(square.type).returnPic(square.color)} x={x} y={y} setClick={clickSelector()}/><br/></> : 
    <Tile key={`${x}${y}`} pic={pieceChooser(square.type).returnPic(square.color)} x={x} y={y} setClick={clickSelector()}/>))
  }

  return(
    <div>
      {tileMapper()}
    </div>
  )
}

export default Board;
