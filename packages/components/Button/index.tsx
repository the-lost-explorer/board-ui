import React from 'react';
import Props from './types';

export default function Button({ type = 'button', children, className, disabled = false, onClick = () => {} }: Props) {
  return (
    <button type={type} className={`${className || 'board_ui__button'}`} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}
