import React from 'react';
import Props from './types';

export default function Input({type = 'text', label, info, placeholder, onChange, defaultValue}: Props) {

  return(
    <div className='board_ui__input_wrapper'>
      {
        label && <label className='board_ui__input__label'>{label}</label>
      }
      <input 
        type={type} 
        className='board_ui__input' 
        placeholder={placeholder} 
        defaultValue={defaultValue}
        onChange={(e: any) => onChange(e.target.value)}
      />
      {
        info && <span className='board_ui__input__info'>{info}</span>
      }
    </div>
  )
}