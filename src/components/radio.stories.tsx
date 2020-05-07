import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import '../../packages/components/Button/index.scss';
import Radio from '../../packages/components/Radio';
import '../../packages/components/Radio/index.scss';
import Audio from '../../packages/Icons/Audio';
import Image from '../../packages/Icons/Image';
import OtherMedia from '../../packages/Icons/OtherMedia';
import Text from '../../packages/Icons/Text';
import '../../packages/styles/index.scss';
import './styles.scss';


const data3 = [
  {
    value: 'All Clean',
    label: 'All Clean',
    content: <img src="https://cdn-minio.vrgmetri.com/cdn-web.vrgmetri.com/board-ui/clean_slate.svg" />
  },
  {
    value: 'Marketing',
    label: 'Marketing',
    content: <img src="https://cdn-minio.vrgmetri.com/cdn-web.vrgmetri.com/board-ui/marketing.svg" />
  },
  {
    value: 'Presentation',
    label: 'Presentation',
    content: <img src="https://cdn-minio.vrgmetri.com/cdn-web.vrgmetri.com/board-ui/presentation.svg" />
  },
  {
    value: 'Ideation',
    label: 'Ideation',
    content: <img src="https://cdn-minio.vrgmetri.com/cdn-web.vrgmetri.com/board-ui/ideation.svg" />
  },
  {
    value: 'Scribbling',
    label: 'Scribbling',
    content: <img src="https://cdn-minio.vrgmetri.com/cdn-web.vrgmetri.com/board-ui/scribbling.svg" />
  },
];


const data2 = [
  {
    value: 'Clean Slate',
    label: 'Clean Slate',
    content: <img src="https://cdn-minio.vrgmetri.com/cdn-web.vrgmetri.com/board-ui/clean_slate.svg" />
  },
  {
    value: 'Bistro',
    label: 'Bistro',
    content: <img src="https://cdn-minio.vrgmetri.com/cdn-web.vrgmetri.com/board-ui/Bistro.svg" />,
  },
  {
    value: 'Office',
    label: 'Office',
    content: <img src="https://cdn-minio.vrgmetri.com/cdn-web.vrgmetri.com/board-ui/Office.svg" />,
  },
  {
    value: 'Bedroom',
    label: 'Bedroom',
    content: <img src="https://cdn-minio.vrgmetri.com/cdn-web.vrgmetri.com/board-ui/Bedroom.svg" />,
    
  },
  {
    value: 'Lakeside',
    label: 'Lakeside',
    content: <img src="https://cdn-minio.vrgmetri.com/cdn-web.vrgmetri.com/board-ui/Lakeside.svg" />,
  },
  {
    value: 'Meadows',
    label: 'Meadows',
    content: <img src="https://cdn-minio.vrgmetri.com/cdn-web.vrgmetri.com/board-ui/Meadows.svg" />,
  },
];

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

function ButtonController() {
  const [selected, setSelected] = useState('2');
  const [selected2, setSelected2] = useState('Office');
  const [selected3, setSelected3] = useState('All Clean');

  function onChange(value: string) {
    setSelected(value);
  }
  
  function onChange2(value: string) {
    setSelected2(value);
  }

  function onChange3(value: string) {
    setSelected3(value);
  }

  return (
    <React.Fragment>
      <div className="flex stickyNotes" style={{marginLeft: -20}}>
        {data.map(s => {
          return <Radio value={s.value} onChange={onChange} name={'Data'} content={s.content} isSelected={selected} />;
        })}
      </div>
      
      <br/> <br/> <br/>

      <div className="flex flex-wrap envVariables" style={{marginLeft: -40}}>
        {data2.map(s => {
          return <Radio value={s.value} onChange={onChange2} label={s.label} name={'Name'} content={s.content} isSelected={selected2} />;
        })}
      </div>

      <br/> <br/> <br/>

      <div className="flex flex-wrap envVariables" style={{marginLeft: -40}}>
        {data3.map(s => {
          return <Radio value={s.value} onChange={onChange3} label={s.label} name={'Name'} content={s.content} isSelected={selected3} />;
        })}
      </div>
      
    </React.Fragment>
  );
}

storiesOf('Components', module).add('Button', () => <ButtonController />);
