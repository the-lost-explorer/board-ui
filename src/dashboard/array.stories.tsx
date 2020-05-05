import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import Board from '../../packages/array/Board';
import '../../packages/array/Board/index.scss';
import { PinProps } from '../../packages/array/Pin';
import '../../packages/array/Pin/index.scss';
import '../../packages/styles/_flex_helpers.scss';

function BoardController() {
  const [pins, setPins] = useState<PinProps[]>([
    { id: '1', body: 'hi there', pitch: '123', yaw: '123' },
    { id: '2', body: 'remember this', color: 'red', pitch: '123', yaw: '123' },
    { id: '3', body: 'hey', color: 'red', pitch: '123', yaw: '123' },
    { id: '4', body: 'hello', pitch: '123', yaw: '123' },
    { id: '5', body: 'amit', pitch: '123', yaw: '123' },
    { id: '6', body: 'shreyas', color: 'green', pitch: '123', yaw: '123' },
    { id: '7', body: 'amey', color: 'green', pitch: '123', yaw: '123' },
    { id: '8', body: 'sahil', pitch: '123', yaw: '123' },
    { id: '9', body: 'hi there', pitch: '123', yaw: '123' },
    { id: '10', body: 'remember this', color: 'blue', pitch: '123', yaw: '123' },
    { id: '11', body: 'hey', color: 'blue', pitch: '123', yaw: '123' },
    { id: '12', body: 'hello', pitch: '123', yaw: '123' },
    { id: '13', body: 'amit', pitch: '123', yaw: '123' },
    { id: '14', body: 'shreyas', pitch: '123', yaw: '123' }
  ]);

  function updatePin(p: PinProps, i: number){
    pins[i] = p;
    setPins(pins);
  }

  function addPin(id: string){
    const updatePins: PinProps[] = pins;
    updatePins.unshift({ id, body: '', pitch: '123', yaw: '123' });
    console.log(pins);
    setPins(updatePins);
  }


  return  <React.Fragment>
    <button onClick={e => addPin((pins.length+1).toString())}>Add</button>
    <Board key={pins.length} pins={pins} updatePin={updatePin} />
  </React.Fragment>

}

storiesOf('Board', module).add('Sticky Notes 2', () => <BoardController />);
