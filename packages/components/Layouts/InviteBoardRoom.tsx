import React from 'react';
import Copy from '../../Icons/Copy';
import LogoIcon from '../../Icons/LogoIcon';
import Block from '../Block';
import Button from '../Button';
import Input from '../Input';

interface Props {
  name: string;
  onClickNext: () => void,
  onClickCopy: () => void,
}

export default function InviteBoardRoom({ name, onClickNext, onClickCopy }: Props) {
  return (
    <Block>
      <div className="flex items-center mb-20">
        <div className="mb-20">
          <LogoIcon width="52" />
        </div>
        <div className="b20l mb-20 ml-20">
          Your boardroom <span className="b20b primary">{name}</span> is created!
        </div>
      </div>
      <div className="b20l mb-40">
        Now, invite your peers to your boardroom <br /> for collaboration by sharing the link.
      </div>

      <div className="mb-160" style={{ maxWidth: 426 }}>
        <Input 
          defaultValue={`boardrooomx.com/${name}`} 
          readOnly 
          buttonIcon={<Copy />}
          buttonFn={onClickCopy}
        />
      </div>

      <Button onClick={onClickNext}> To your Boardroom </Button>
    </Block>
  );
}
