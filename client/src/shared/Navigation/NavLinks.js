import React from 'react';
import {NavLink} from 'react-router-dom'

import './NavLinks.css'

const NavLinks = ({children}) => {
    return (
      <ul className='NavLinks'>
        <li>
            <NavLink to='/' exact>All</NavLink>
        </li>
        <li>
            <NavLink to='/:uid/places'>My</NavLink>
        </li>
        <li>
            <NavLink to='/places/new'>Add</NavLink>
        </li>
        <li>
            <NavLink to='/auth'>Auth</NavLink>
        </li>
      </ul>
    );
  }
  
  export default NavLinks;
  