import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './SideDrawer.css';

const SideDrawer = ({children, show, onClose}) => {
  const content = (
     <CSSTransition in={show} timeout={100} className='SideDrawer slide-right' mountOnEnter unmountOnExit>
      <aside onClick={onClose}>{children}</aside>
     </CSSTransition>
  )

  return ReactDOM.createPortal(content, document.querySelector('#drawer'))

}
  
  export default SideDrawer;
  