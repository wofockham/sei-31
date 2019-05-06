import React from 'react';
// To save headaches, the HashRouter is preferred to BrowserRouter.
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import FAQ from './components/FAQ';
import Character from './components/Character';

// Not a functional component -- it's just some JSX
const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={ Home } />
      <Route exact path="/faq" component={ FAQ } />
      <Route path="/characters/:name" component={ Character } />
    </div>
  </Router>
);

export default Routes;
