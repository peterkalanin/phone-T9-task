import React from 'react';

export default function PhoneButton(props) {
  return (
    <div className='phone-keybutton'>
      <div className='phone-keybutton-number'>{props.button.key}</div>
      <div className='phone-keybutton-letters'>
        {props.button.letters.join('')}
      </div>
    </div>
  );
}
