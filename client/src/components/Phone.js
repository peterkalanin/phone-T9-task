import React from 'react';
import { useState, useEffect } from 'react';
import PhoneKeyButton from './PhoneKeyButton';

export default function Phone() {
  const [numberKeys, setNumberKeys] = useState([]);

  useEffect(() => {}, [numberKeys]);

  const buttons = [
    { key: '1', letters: [''] },
    { key: '2', letters: ['a', 'b', 'c'] },
    { key: '3', letters: ['d', 'e', 'f'] },
    { key: '4', letters: ['g', 'h', 'i'] },
    { key: '5', letters: ['j', 'k', 'l'] },
    { key: '6', letters: ['m', 'n', 'o'] },
    { key: '7', letters: ['p', 'q', 'r', 's'] },
    { key: '8', letters: ['t', 'u', 'v'] },
    { key: '9', letters: ['w', 'x', 'y', 'z'] },
    { key: '*', letters: ['+'] },
    { key: '0', letters: ['⎵'] },
    { key: '#', letters: ['⇧'] },
  ];

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
        <div className='phone-keyboard'>
          {buttons.map((button, index) => (
            <PhoneKeyButton button={button} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
