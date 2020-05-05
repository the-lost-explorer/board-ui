import { storiesOf } from '@storybook/react';
import React from 'react';
import Board from '../../packages/Board';
import '../../packages/Board/index.scss';
import '../../packages/Pin/index.scss';
import '../../packages/styles/_flex_helpers.scss';

storiesOf('Board', module).add('Sticky Notes', () => <Board />);
