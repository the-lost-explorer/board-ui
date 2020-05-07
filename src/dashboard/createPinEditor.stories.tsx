import React from 'react';
import { storiesOf } from '@storybook/react';
import CreatePinEditor from '../../packages/components/CreatePinEdtitor';
import '../../packages/components/CreatePinEdtitor/index.scss';
import '../../packages/components/Radio/index.scss';
import '../../packages/styles/index.scss';



function CreatePinController() {

  return (
    <div>
      <CreatePinEditor />
    </div>
  )
}

storiesOf('Components', module).add('Create Pin Editor', () => <CreatePinController />);
