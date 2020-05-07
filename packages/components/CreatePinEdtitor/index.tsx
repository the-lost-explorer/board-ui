import React from 'react';
import './index.scss';
import '../../styles/_components.scss';

import CloseIcon from '../../Icons/CloseIcon';
import CursorIcon from '../../Icons/CursorIcon';
import ImageIcon from '../../Icons/ImageIcon';
import MusicIcon from '../../Icons/MusicIcon';
import OtherMedia from '../../Icons/OtherMedia';

export default function CreatePinEditor() {

  return (
    <div className="createPinEditor_ui">
      <div className="flex items-center justify-center">
        <textarea className="text-title b14b" placeholder="Title"></textarea>
      </div>

      <div className="flex">
        <textarea className="text-content b14l" placeholder="Enter text here"></textarea>
      </div>

      <div className="media_pane flex items-center justify-between">
        <div className="media_pane__icons flex">
          <div className="media_pane__icons__icon">
             <CursorIcon />
          </div>

          <div className="media_pane__icons__icon">
            <ImageIcon />
          </div>

          <div className="media_pane__icons__icon">
            <MusicIcon />
          </div>

          <div className="media_pane__icons__icon">
            <OtherMedia />
          </div>
        </div>

        <CloseIcon />
      </div>
    </div>
  )
}