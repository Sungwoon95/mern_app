import React from 'react';
import ReactDOM from 'react-dom'
import { CSSTransition} from 'react-transition-group'

import Backdrop from './Backdrop'
import './Modal.css';

const ModalOverlay = props => {
  const content = (
    <div className={`modal ${props.className}`} style={props.style}>
      <header className={`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      <form onSubmit={props.onSubmit ? props.onSubmit : (e)=>(e.preventDefault())}>
        <div className={`modal__content ${props.contentClass}`}>
          {props.children}
        </div>
      </form>
      <footer className={`modal__footer ${props.footerClass}`}>
        {props.footer}
      </footer>
    </div>
  )
  return ReactDOM.createPortal(content, document.querySelector('#modal'))
}

const Modal = props => {
  return(
  <>
  {props.show && <Backdrop onClick={props.onHide} />} 
  <CSSTransition in={props.show} timeout={100} className='Modal' mountOnEnter unmountOnExit>
    <ModalOverlay {...props} />
  </CSSTransition>
  </>
  )
}

export default Modal