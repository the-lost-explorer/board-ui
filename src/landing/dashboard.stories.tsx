import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { FullLayout } from '../../packages/components/Block';
import '../../packages/components/Block/index.scss';
import '../../packages/components/Button/index.scss';
import '../../packages/components/Input/index.scss';
import CreateDashboard from '../../packages/components/Layouts/CreateDashboard';
import InviteDashboard from '../../packages/components/Layouts/InviteDashboard';
import Logo from '../../packages/Icons/Logo';
// import css
import '../../packages/styles/index.scss';


function Dashboard() {
  const [boardName, setBoardName] = useState('');
  const [invite, setInvite] = useState(false);


  function getBoardRoomName(name: string){
    setBoardName(name);
  }

  function callInvite(){
    if(boardName){
      setInvite(true);
    }
  }

  return <FullLayout>
    <div className='flex justify-between items-center' style={{padding: 40}}>
      <div className="flex-1" style={{textAlign: "center"}}>
        <Logo />
      </div>
      {
        invite ? <InviteDashboard 
          boardName={boardName}
          onChange={getBoardRoomName}
          onClick={callInvite}
        /> : <CreateDashboard 
          boardName={boardName}
          onChange={getBoardRoomName}
          onClick={callInvite}
        /> 
      }
    </div>
    
    {/* <JoinDashboard />  */}
  </FullLayout>
}

storiesOf('Dashboard', module).add('Full', () => <Dashboard />);