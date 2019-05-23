import React from "react";
import { Link } from "gatsby";

const NavLink = (props) => (
  <li style={{display: 'inline-block', marginRight: '1em'}}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);


export default ({children}) => (
  <div style={{ margin: '3em auto', maxWidth: 650, padding: '0 1em' }}>
    <header style={ {marginBottom: '1.5em'} }>
      <Link to="/">
        <h3 style={ {display: 'inline'} }>My Crazy Site</h3>
      </Link>
      <ul style={ {display: 'inline'} }>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>
    </header>
    {children}
  </div>
);
