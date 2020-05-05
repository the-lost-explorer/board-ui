import React from 'react';
import Pin, { PinProps } from '../Pin';

export interface BoardProps {
  id: string,
  pins: {
    [key: string]: PinProps
  }
}

interface Props {
  pins: PinProps[],
  updatePin: (p : PinProps, i: number) => void,
}

export default function Board({ updatePin, pins }: Props) {
  return (
    <div className="board_ui__board flex flex-wrap">
      {pins.sort((a: PinProps, b: PinProps) => parseInt(a.id) > parseInt(b.id) ? -1 : parseInt(a.id) < parseInt(b.id) ? 1 : 0 ).map((p: PinProps, i: number) => (
        <Pin key={p.id + p.body} pinProps={{...p}} onChange={updatePin} index={i} />
      ))}
    </div>
  );
}

