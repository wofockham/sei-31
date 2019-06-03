import React from 'react';
import Counter from './components/Counter';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  count: 0
};

// Set of rules to take the current state and an action
// and return a new state.
const reducer = (state=initialState, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    default:
      return state; // The reducer must always return a state object.
  }
};

const store = createStore( reducer );

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
