import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { FullLayout } from '../../packages/components/Block';
import '../../packages/components/Block/index.scss';
import '../../packages/components/Button/index.scss';
import '../../packages/components/Input/index.scss';
import CreateBoardRoom from '../../packages/components/Layouts/CreateBoardRoom';
import InviteBoardRoom from '../../packages/components/Layouts/InviteBoardRoom';
// import css
import '../../packages/styles/index.scss';

function Dashboard() {
  const [boardName, setBoardName] = useState('');
  const [invite, setInvite] = useState(false);

  function getBoardRoomName(name: string) {
    setBoardName(name);
    setInvite(true);
  }

  function onClickInvite() {}

  function onClickBoardUrl() {}

  return (
    <FullLayout>
      {invite ? (
          <InviteBoardRoom name={boardName} onClickNext={onClickBoardUrl} onClickCopy={onClickInvite} />
        ) : (
          <CreateBoardRoom onSubmit={getBoardRoomName} />
        )}
    </FullLayout>
  );
}

storiesOf('BoardRoom', module).add('Create', () => <Dashboard />);
