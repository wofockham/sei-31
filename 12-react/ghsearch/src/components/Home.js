import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {

  const _randomUser = () => {
    const students = [
      'monicamendesmontanha',
      'Trigotometry',
      'nivvyart',
      'mmborres',
      'patricianunes',
      'edgarjin88',
      'LukeAnton',
      'pandyapurvi',
      'AnthonyGDoueihi',
      'jamaspy',
      'ritikagoel87',
      'rashidabengali',
      'milasv',
      'ChrisLaneAU',
      'SamSeabourn',
      'Michaelfov',
      'hluscombe',
      'FireMugen',
      'adlanelias',
      'bennnym'
    ];

    const index = Math.floor( Math.random() * students.length );
    const username = students[ index ];
    props.history.push(`/details/${ username }`);
  };

  return (
    <div className="home">
      <h1>Github Search</h1>
      <Link to="/search">
        <button>Search for a user</button>
      </Link>
      <button onClick={ _randomUser }>Random user</button>
    </div>
  );
};
