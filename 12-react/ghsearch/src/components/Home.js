import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {

  return (
    <div className="home">
      <h1>Github Search</h1>
      <Link to="/search">
        <button>Search for a user</button>
      </Link>
    </div>
  );
};
