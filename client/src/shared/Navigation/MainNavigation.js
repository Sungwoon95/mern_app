import React from 'react';
import { Link } from 'react-router-dom'

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import './MainNavigation.css';

const MainNavigation = () => {
    return (
        <MainHeader>
            <button>
                확인
            </button>
            <h1 className='MainNavigation__title'>
                Yours
            </h1>
            <nav>
                <NavLinks />
            </nav>
        </MainHeader>
    );
  }
  
  export default MainNavigation;
  