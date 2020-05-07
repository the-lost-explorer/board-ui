import { storiesOf } from '@storybook/react';
import React from 'react';
import { FullLayout } from '../../packages/components/Block';
import '../../packages/components/Block/index.scss';
import '../../packages/components/Button/index.scss';
import '../../packages/components/Input/index.scss';
import JoinBoardRoom from '../../packages/components/Layouts/JoinBoardRoom';
import Logo from '../../packages/Icons/Logo';
// import css
import '../../packages/styles/index.scss';

function Dashboard() {

  function getUserName(name: string) {
    console.log(name);
  }

  return (
    <FullLayout>
      <div className="flex flex-1 justify-between items-center" style={{ padding: 40 }}>
        <div className="flex-1" style={{ textAlign: 'center' }}>
          <Logo />
        </div>
        <JoinBoardRoom onSubmit={getUserName} boardName={'display'} />
      </div>
    </FullLayout>
  );
}

storiesOf('BoardRoom', module).add('Join', () => <Dashboard />);
