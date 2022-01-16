import React from 'react';

export default function PhoneControlButton(props) {
  return (
    <div className='phone-keybutton' onClick={() => props.click()}>
      <div className='phone-keybutton-control'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          x='0px'
          y='0px'
          width='24'
          height='24'
          viewBox='0 0 172 172'
        >
          <path d='M21.5,86v0c0,-3.956 3.21067,-7.16667 7.16667,-7.16667h114.66667c3.956,0 7.16667,3.21067 7.16667,7.16667v0c0,3.956 -3.21067,7.16667 -7.16667,7.16667h-114.66667c-3.956,0 -7.16667,-3.21067 -7.16667,-7.16667z'></path>
        </svg>
      </div>
    </div>
  );
}
