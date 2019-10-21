import React, {useState, useEffect} from 'react';

import pieceChooser from '../../helpers/pieceChooser';
import boardCopier from '../../helpers/boardCopier';
import Tile from './Tile/Tile';
import inCheck from '../../PlayConditions/inCheck';
import friendlyCanMove from '../../PlayConditions/friendlyCanMove';
import initBoard from '../initConfig/board.json';
import './Board.css';

export interface TileConfig{
  type: string;
  color: string;
}

const Board = () => {
  const [board, setBoard] = useState(initBoard);
  const [firstClick, setFirstClick] = useState({x: -1, y: -1});
  const [secondClick, setSecondClick] = useState({x: -1, y: -1});
  const [whiteTurn, setWhiteTurn] = useState(true);

  useEffect(() => {
    if (firstClick.x === -1 && secondClick.x === -1){
      endChecker();
    } else if (firstClick.x !== -1 && secondClick.x !== -1){
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
    setFirstClick({x: -1, y: -1});
    setSecondClick({x: -1, y: -1});
  }

  const clickSelector = () => {
    return firstClick.x === -1 ? setFirstClick : setSecondClick;
  }

  const tileMapper = () => {
    return board.map((row, y) => row.map((square, x) =>  
    <Tile key={`${x}${y}`} pic={pieceChooser(square.type).returnPic(square.color)} x={x} y={y} setClick={clickSelector()}/>))
  }

  return(
    <div className="board">
      {tileMapper()}
    </div>
  )
}

export default Board;
