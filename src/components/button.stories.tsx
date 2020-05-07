import { storiesOf } from '@storybook/react';
import React from 'react';
import Button from '../../packages/components/Button';
import '../../packages/components/Button/index.scss';
import '../../packages/styles/index.scss';


function ButtonController() {
  return  <React.Fragment>
    <Button>
      Active
    </Button> 

    <br/> <br/>

    <Button disabled>
      Disabled
    </Button> 
  </React.Fragment>
}

storiesOf('Components', module).add('Button', () => <ButtonController />);
