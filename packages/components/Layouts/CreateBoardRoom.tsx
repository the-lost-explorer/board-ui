import React, { useState } from 'react';
import LogoIcon from '../../Icons/LogoIcon';
import Block from '../Block';
import Button from '../Button';
import Input from '../Input';

interface Props {
  onSubmit: (e: string) => void,
}

export default function CreateBoardRoom({ onSubmit }: Props) {
  const [name, setName] = useState(''); 

  function onSubmitForm(e: any){
    e.preventDefault();
    onSubmit(name);
  }
  
  return (
    <Block>
      <div className="b20l mb-20">
        A virtual Boardroom for all those brainstorming sessions.
      </div>
      <div className="mb-20">
        <LogoIcon />
      </div>
      <div className="b20b mb-60">
        Create . Collaborate . Create more
      </div>

      {/* 1. create a form to submit the board room name */}
      <form onSubmit={onSubmitForm}>
        <div className="flex items-end">
          <div className='flex-1'>
            <Input onChange={(v) => setName(v)} label='Create your room' info='e.g. Design, Tech, Brainstorming etc' placeholder='Name the room' />
          </div>
          <span style={{marginLeft: 40, marginBottom: 30}}>
            <Button type='submit' disabled={!!!name.length}> > </Button> {/* Checking if the name field is empty */}
          </span> 
        </div>
      </form>
    </Block>
  )
}
