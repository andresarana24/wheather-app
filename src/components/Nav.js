import React, {Fragment} from 'react';
import Search from './Search.js';
import { NavLink, Link } from 'react-router-dom';

const Nav = ({onSearch}) => {
  return ( 
    <Fragment>
      <img src="#" alt="not found"/>
      <span>Soy el título del Navbar</span>
      <Link exact to="/">Home</Link>
      <Link to="/about">About</Link>
      <Search onSearch={onSearch}/>
    </Fragment>
  );
}
 
export default Nav;