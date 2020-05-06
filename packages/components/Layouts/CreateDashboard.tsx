import React from 'react';
import LogoIcon from '../../Icons/LogoIcon';
import Block from '../Block';
import Button from '../Button';
import Input from '../Input';

export default function CreateDashboard({ boardName, onChange, onClick }: { boardName: string, onChange: (e: string) => void, onClick: () => void}) {
  return (
    <Block>
      <div className="b20l mb-20" style={{maxWidth: 420}}>
        A virtual Boardroom for all those brainstorming sessions.
      </div>
      <div className="mb-20">
        <LogoIcon />
      </div>
      <div className="b20b mb-60">
        Create . Collaborate . Create more
      </div>

      <div className="flex items-end">
        <div className='flex-1'>
          <Input onChange={onChange} label='Create your room' info='e.g. Design, Tech, Brainstorming etc' placeholder='Name the room' />
        </div>
        <span style={{marginLeft: 40, marginBottom: 30}}><Button onClick={onClick} disabled={!!!boardName.length}> > </Button></span>   
      </div>
    </Block>
  )
}
