import React from 'react';
import { useState, useEffect } from 'react';

export default function Phone() {
  const [numberKeys, setNumberKeys] = useState([]);

  useEffect(() => {}, [numberKeys]);

  return <div></div>;
}
