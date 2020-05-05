import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';
import Board, { BoardProps } from '../../packages/Board';
import '../../packages/Board/index.scss';
import '../../packages/Pin/index.scss';
import '../../packages/styles/_flex_helpers.scss';
import { PinProps } from '../../packages/Pin';

interface Props {
  
}

interface State {
  board: BoardProps
}

export default class BoardController extends Component<Props, State> {
  state = {
    board: {
      id: 'tech',
      pins: {
        '1': { id: '1', body: 'hi there', pitch: '123', yaw: '123' },
        '2': { id: '2', body: 'remember this', color: 'red', pitch: '123', yaw: '123' },
        '3': { id: '3', body: 'hey', color: 'red', pitch: '123', yaw: '123' },
        '4': { id: '4', body: 'hello', pitch: '123', yaw: '123' },
        '5': { id: '5', body: 'amit', pitch: '123', yaw: '123' },
        '6': { id: '6', body: 'shreyas', color: 'green', pitch: '123', yaw: '123' },
        '7': { id: '7', body: 'amey', color: 'green', pitch: '123', yaw: '123' },
        '8': { id: '8', body: 'sahil', pitch: '123', yaw: '123' },
        '9': { id: '9', body: 'hi there', pitch: '123', yaw: '123' },
        '10': { id: '10', body: 'remember this', color: 'blue', pitch: '123', yaw: '123' },
        '11': { id: '11', body: 'hey', color: 'blue', pitch: '123', yaw: '123' },
        '12': { id: '12', body: 'hello', pitch: '123', yaw: '123' },
        '13': { id: '13', body: 'amit', pitch: '123', yaw: '123' },
        '14': { id: '14', body: 'shreyas', pitch: '123', yaw: '123' },
        '15': { id: '15', body: 'amey', color: 'white', pitch: '123', yaw: '123' },
        '16': { id: '16', body: 'sahil', color: 'white', pitch: '123', yaw: '123' },
        '17': { id: '17', body: 'remember this', pitch: '123', yaw: '123' },
        '18': { id: '18', body: 'hey', pitch: '123', yaw: '123' },
        '19': { id: '19', body: 'hello', pitch: '123', yaw: '123' },
        '20': { id: '20', body: 'amit', pitch: '123', yaw: '123' },
        '21': { id: '21', body: 'shreyas', pitch: '123', yaw: '123' },
        '22': { id: '22', body: 'amey', pitch: '123', yaw: '123' },
        '23': { id: '23', body: 'sahil', pitch: '123', yaw: '123' },
        '24': { id: '24', body: 'hey', pitch: '123', yaw: '123' },
        '25': { id: '25', body: 'hello', pitch: '123', yaw: '123' },
        '26': { id: '26', body: 'amit', pitch: '123', yaw: '123' },
        '27': { id: '27', body: 'shreyas', pitch: '123', yaw: '123' },
        '28': { id: '28', body: 'amey', pitch: '123', yaw: '123' },
        '29': { id: '29', body: 'sahil', pitch: '123', yaw: '123' },
      },
    }
  }

  _updatePin = (p: PinProps) => {
    this.state.board.pins[p.id] = p;
    this.setState({board});
  }

  _addPin = () => {
    const nextIndex = (Object.values(this.state.board.pins).length + 1).toString(); 
    this.state.board.pins[nextIndex] = { id: nextIndex, body: '', pitch: '123', yaw: '123' };
    this.setState({board});
  }

  render() {
    return(<Board updatePin={this._updatePin} boardJson={this.state.board} />);
  }
}

storiesOf('Board', module).add('Sticky Notes', () => <Board />);
