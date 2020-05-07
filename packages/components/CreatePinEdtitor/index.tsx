import React, {useState} from 'react';
import Radio from '../Radio'

import CloseIcon from '../../Icons/CloseIcon';
import Text from '../../Icons/Text';
import Image from '../../Icons/Image';
import Audio from '../../Icons/Audio';
import OtherMedia from '../../Icons/OtherMedia';

export default function CreatePinEditor() {
  const [selected, setSelected] = useState('2');


  const data = [
    {
      value: 'text',
      content: <Text />,
    },
    {
      value: 'audio',
      content: <Audio />,
    },
    {
      value: 'others',
      content: <OtherMedia />,
    },
    {
      value: 'image',
      content: <Image />,
    },
  ];

  function onChange(value: string) {
    setSelected(value);
  }

  return (
    <div className="createPinEditor_ui">
      <div className="flex items-center justify-center">
        <textarea className="text-title b14b" placeholder="Title"></textarea>
      </div>

      <div className="flex">
        <textarea className="text-content b14l" placeholder="Enter text here"></textarea>
      </div>

      <div className="media_pane flex items-center justify-between">

        <div className="flex radio_button_container" style={{marginLeft: -20}}>
          {data.map(s => {
            return <Radio value={s.value} onChange={onChange} name={'Data'} content={s.content} isSelected={selected} />;
          })}
        </div>
        
        <CloseIcon />
      </div>
    </div>
  )
}