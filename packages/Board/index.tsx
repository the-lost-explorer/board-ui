import React from 'react';
import Pin, { PinProps } from '../Pin';

export interface BoardProps {
  id: string,
  pins: {
    [key: string]: PinProps
  }
}

interface Props {
  boardJson: BoardProps,
  updatePin: (p : PinProps) => void,
}

export default function Board({ updatePin, boardJson }: Props) {

  console.log(boardJson);

  return (
    <div className="board_ui__board flex flex-wrap">
      {Object.values(boardJson.pins).sort((a: PinProps, b: PinProps) => parseInt(a.id) > parseInt(b.id) ? -1 : parseInt(a.id) < parseInt(b.id) ? 1 : 0 ).map((p: PinProps) => (
        <Pin key={p.id} pinProps={{...p}} onChange={updatePin} />
      ))}
    </div>
  );
}

