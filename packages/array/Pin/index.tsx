import React from 'react';

export interface PinProps {
  id: any;
  body: string;
  color?: 'yellow' | 'red' | 'blue' | 'green' | 'white' | undefined;
  pitch?: string;
  yaw?: string;
}

interface Props {
  onChange: (p : PinProps, i: number) => void,
  pinProps: PinProps,
  index: number
}

export default function Pin({ pinProps, onChange, index }: Props) {
  function pinContentModified(body: string) {
    onChange({...pinProps, body}, index);
  }


  return (
    <div className='board_ui__pin'>
      <textarea className={`board_ui__pin_${pinProps.color ? pinProps.color : 'yellow'}`} onChange={(e: any) => pinContentModified(e.target.value)} defaultValue={pinProps.body}></textarea>
    </div>
  );
}
