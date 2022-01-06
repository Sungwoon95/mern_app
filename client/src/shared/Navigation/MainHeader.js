import React from 'react';

import './MainHeader.css'

const MainHeader = ({children}) => {
    return (
      <header className='MainHeader'>
        {children}
      </header>
    );
  }
  
  export default MainHeader;
  