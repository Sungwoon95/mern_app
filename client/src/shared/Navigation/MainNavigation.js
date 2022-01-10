import React, {useState} from 'react';
import { Link } from 'react-router-dom'

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../components/Backdrop';
import './MainNavigation.css';

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const openDrawer = () => {
    setIsOpen(true);
  }
  const closeDrawer = () =>{
    setIsOpen(false);
  }

  return (
        <>
        {isOpen && <Backdrop onClose={closeDrawer}/>}
        <SideDrawer show={isOpen} onClose={closeDrawer}>
            <nav className='MainNavigation__drawer'>
                <NavLinks />
            </nav>
        </SideDrawer>
        <MainHeader>
            <h1 className='MainNavigation__title'>
                Yours
            </h1>
            <button className='MainNavigation__menu' onClick={openDrawer}>
                확인
            </button>
            <nav className ='MainNavigation__nav'>
                <NavLinks />
            </nav>
        </MainHeader>
        </>
    );
  }
  
  export default MainNavigation;
  