import React, { useState } from 'react';
import Pin, { PinProps } from '../Pin';

export interface BoardProps {
  id: string,
  pins: {
    [key: string]: PinProps
  }
}

export default function Board({}: BoardProps) {

  return (
    <div className="board_ui__board flex flex-wrap">
      <button onClick={addPin}>New Note</button>

      {Object.values(board.pins).sort((a: PinProps, b: PinProps) => parseInt(a.id) > parseInt(b.id) ? -1 : parseInt(a.id) < parseInt(b.id) ? 1 : 0 ).map((p: PinProps) => (
        <Pin key={p.id} pinProps={{...p}} onChange={updatePin} />
      ))}
    </div>
  );
}

