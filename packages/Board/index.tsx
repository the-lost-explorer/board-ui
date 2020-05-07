import React from 'react';
import { Pin, PinProps } from '../Pin';

export interface BoardProps {
  id: string,
  pins: {
    [key: string]: PinProps
  }
}

interface Props {
  boardJson: BoardProps,
  updatePin: (p : PinProps) => void,
  onDelete: (id: number | string) => void
}

export function Board({ updatePin, boardJson, onDelete }: Props) {

  return (
    <div className="board_ui__board flex flex-wrap">
      {Object.values(boardJson.pins).sort((a: PinProps, b: PinProps) => a.id > b.id ? -1 : a.id < b.id ? 1 : 0 ).map((p: PinProps) => (
        <Pin key={p.id} pinProps={{...p}} onChange={updatePin} onDelete={onDelete} />
      ))}
    </div>
  );
}

