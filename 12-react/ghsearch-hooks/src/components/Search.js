import React, { useState } from 'react';

export default (props) => {
  const [username, setUsername] = useState('coldhead');

  const _handleChange = (e) => setUsername(e.target.value);

  const _handleSubmit = (e) => {
    e.preventDefault();
    props.history.push(`/details/${ username }`);
  };

  return (
    <div className="search">
      <h2>Search Github by username</h2>
      <form onSubmit={ _handleSubmit }>
        <input type="search" onChange={ _handleChange } value={ username } />
        <button>Search for { username }</button>
      </form>
    </div>
  )
};
