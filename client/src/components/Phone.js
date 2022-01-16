import React from 'react';
import { useState, useEffect } from 'react';

export default function Phone() {
  const [numberKeys, setNumberKeys] = useState([]);

  useEffect(() => {}, [numberKeys]);

  return (
    <div className='phone-wrapper'>
      <div className='phone'>
        <div className='phone-speaker'>
          <div className='phone-speaker-dot'></div>
          <div className='phone-speaker-dot'></div>
          <div className='phone-speaker-dot'></div>
          <div className='phone-speaker-dot'></div>
        </div>
        <div className='phone-screen-wrapper'></div>
        <div className='phone-keyboard'></div>
      </div>
    </div>
  );
}
