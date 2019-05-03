import React from 'react';
import Clock from './Clock';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <Clock />
      <Profile name="Groucho" age="101" motto="No gods no master" pic="http://fillmurray.com/400/400" />
      <Profile name="Harpo" age="98" motto="" pic="http://fillmurray.com/401/400" />
      <Profile name="Chico" age="99" motto="No gods no master" pic="http://fillmurray.com/400/401" />
    </div>
  );
}

export default App;
