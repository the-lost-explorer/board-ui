import React, { useState } from 'react';
import Pin, { PinProps } from '../Pin';

interface Board {
  id: string,
  pins: {
    [key: string]: PinProps
  }
}

export default function Board() {
  const [board, setBoard] = useState<Board>({
    id: 'tech',
    pins: {
      '1': { id: '1', body: 'hi there', pitch: '123', yaw: '123' },
      '2': { id: '2', body: 'remember this', pitch: '123', yaw: '123' },
    },
  });

  function updatePin(p: PinProps){
    board.pins[p.id] = p;
    setBoard(board);
  }

  // function addPin(p: PinProps){
  //   const updatedPin = board;
  //   updatedPin.pins[p.id] = p;
  //   setBoard(updatedPin)
  // }

  return (
    <div className="board_ui__board flex flex-wrap">
      {Object.values(board.pins).map((p: PinProps) => (
        <Pin key={p.id} pinProps={{...p}} onChange={updatePin} />
      ))}
    </div>
  );
}

