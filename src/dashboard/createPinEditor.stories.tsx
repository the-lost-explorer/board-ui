import React from 'react';
import { storiesOf } from '@storybook/react';
import CreatePinEditor from '../../packages/components/CreatePinEdtitor';


function CreatePinController() {

  return (
    <div>
      <CreatePinEditor />
    </div>
  )
}

storiesOf('Components', module).add('Create Pin Editor', () => <CreatePinController />);
