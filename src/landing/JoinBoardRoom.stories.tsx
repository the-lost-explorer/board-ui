import { storiesOf } from '@storybook/react';
import React from 'react';
import { BgLayout } from '../../packages/components/Block';
import '../../packages/components/Block/index.scss';
import '../../packages/components/Button/index.scss';
import '../../packages/components/Input/index.scss';
import JoinBoardRoom from '../../packages/components/Layouts/JoinBoardRoom';
// import css
import '../../packages/styles/index.scss';

function Dashboard() {

  function getUserName(name: string) {
    console.log(name);
  }

  return (
    <BgLayout>
      <JoinBoardRoom onSubmit={getUserName} boardName={'display'} />
    </BgLayout>
  );
}

storiesOf('BoardRoom', module).add('Join', () => <Dashboard />);
