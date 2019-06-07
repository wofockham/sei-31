import React, { useState } from 'react';

// React Hooks
const Clickr = () => {
  const [clicks, setClicks] = useState(0); // Destructuring

  const incrementClicks = () => {
    setClicks(1 + clicks); // 1. Updates the state, 2. Rerenders this component
  };

  return (
    <button onClick={ incrementClicks }>{ clicks } clicks so far</button>
  );
};

export default Clickr;
