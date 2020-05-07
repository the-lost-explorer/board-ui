import React from 'react';

export interface PinProps {
  id: number | string;
  body: string;
  color?: string;
  pitch?: number;
  yaw?: number;
}

interface Props {
  onChange: (p : PinProps) => void,
  pinProps: PinProps,
  onDelete: (id: number | string) => void
}

export function Pin({ pinProps, onChange, onDelete }: Props) {
  function pinContentModified(body: string) {
    onChange({...pinProps, body});
  }

  return (
    <div className='board_ui__pin'>
      <textarea className={`board_ui__pin_${pinProps.color ? pinProps.color : 'yellow'}`} onChange={(e: any) => pinContentModified(e.target.value)} value={pinProps.body}></textarea>
      <span className="closeBtn" onClick={() => onDelete(pinProps.id)}> x </span>
    </div>
  );
}
