import React from 'react';

export interface PinProps {
  id: string;
  body: string;
  color?: 'yellow' | 'red' | 'blue' | 'green' | 'white' | undefined;
  pitch?: string;
  yaw?: string;
}

interface Props {
  onChange: (p : PinProps) => void,
  pinProps: PinProps
}

export default function Pin({ pinProps, onChange }: Props) {
  function pinContentModified(body: string) {
    onChange({...pinProps, body});
  }


  return (
    <div className='board_ui__pin'>
      <textarea className={`board_ui__pin_${pinProps.color ? pinProps.color : 'yellow'}`} onChange={(e: any) => pinContentModified(e.target.value)} defaultValue={pinProps.body}></textarea>
    </div>
  );
}
