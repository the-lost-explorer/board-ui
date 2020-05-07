import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { FullLayout } from '../../packages/components/Block';
import '../../packages/components/Block/index.scss';
import '../../packages/components/Button/index.scss';
import '../../packages/components/Input/index.scss';
import CreateBoardRoom from '../../packages/components/Layouts/CreateBoardRoom';
import InviteBoardRoom from '../../packages/components/Layouts/InviteBoardRoom';
import Logo from '../../packages/Icons/Logo';
// import css
import '../../packages/styles/index.scss';

function Dashboard() {
  const [boardName, setBoardName] = useState('');
  const [invite, setInvite] = useState(false);

  function getBoardRoomName(name: string) {
    setBoardName(name);
    setInvite(true);
  }

  function onClickInvite(){

  }

  function onClickBoardUrl(){

  }

  return (
    <FullLayout>
      <div className="flex justify-between items-center" style={{ padding: 40 }}>
        <div className="flex-1" style={{ textAlign: 'center' }}>
          <Logo />
        </div>
        {invite ? (
          <InviteBoardRoom 
            name={boardName} 
            onClickNext={onClickBoardUrl} 
            onClickCopy={onClickInvite}
          />
        ) : (
          <CreateBoardRoom onSubmit={getBoardRoomName} />
        )}
      </div>
    </FullLayout>
  );
}

storiesOf('Dashboard', module).add('Full', () => <Dashboard />);
