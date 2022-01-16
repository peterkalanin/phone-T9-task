import React from 'react';

export default function PhoneKeyButton(props) {
  return (
    <div className='phone-keybutton' onClick={() => props.click(props.button)}>
      <div className='phone-keybutton-number'>{props.button.key}</div>
      <div className='phone-keybutton-letters'>
        {props.button.letters.join('')}
      </div>
    </div>
  );
}
