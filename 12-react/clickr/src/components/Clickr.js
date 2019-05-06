import React, { useState } from 'react';

// React Hooks
const Clickr = function () {
  const [clicks, setClicks] = useState(0); // Destructuring

  const incrementClicks = () => {
    setClicks(1 + clicks); // this.setState({clicks: this.state.clicks+1});
  };

  return (
    <button onClick={ incrementClicks }>{ clicks } clicks so far</button>
  );
};

export default Clickr;
