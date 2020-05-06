import React from 'react';
import LogoIcon from '../../Icons/LogoIcon';
import Block from '../Block';
import Button from '../Button';
import Input from '../Input';

export default function InviteDashboard({boardName, onChange, onClick}: {boardName: string, onChange: (e: string) => void, onClick: () => void}) {
  return (
    <Block>
      <div className="flex items-center mb-20">
        <div className="mb-20">
          <LogoIcon width="52" />
        </div>
        <div className="b20l mb-20 ml-20" >
          Your boardroom <span className="b20b primary">{boardName}</span> is created!
        </div>
      </div>
      <div className="b20l mb-40">
         Now, invite your peers to your boardroom <br/>  for collaboration by sharing the link.
      </div>
 
      <div className="mb-160" style={{maxWidth: 426}}>
        <Input onChange={onChange} defaultValue={`boardrooomx.com/${boardName}`} />
      </div>


      <Button onClick={onClick}> To your Boardroom </Button>
    </Block>
  )
}
