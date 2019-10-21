import React from 'react';
import './Tile.css';

type ClickObj = {
  x: number;
  y: number;
}

type TileProps = {
  pic: string;
  x: number;
  y: number;
  setClick({x, y}: ClickObj): void;
}

const Tile = ({pic, x, y, setClick}: TileProps) => {
  return(
    <div key={`${x}${y}`} className="tile" onClick={() => setClick({x: x, y: y})}>
      <img src={pic} className="pic"/>
    </div>
  )
}

export default Tile;