import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Welcome To Home</h2>
      <p>
        Please check out our <Link to="/faq">frequently asked questions</Link>.
      </p>
      <p>
        <Link to="/characters/luke">Luke Skywalker</Link>
      </p>
      <p>
        <Link to="/characters/r2d2">R2D2</Link>
      </p>
    </div>
  )
};

export default Home;
