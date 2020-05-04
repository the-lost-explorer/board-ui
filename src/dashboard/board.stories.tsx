import { storiesOf } from '@storybook/react';
import React from 'react';


const App = () => {
  return <div>
    This is where your code goes
  </div>;
};

storiesOf('Board', module).add('Sticky Notes', () => <App />);
