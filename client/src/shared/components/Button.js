import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

const Button = props => {
  if(props.href){
    return(
      <a href={props.href} className=
      {`button button--
      ${props.size || 'default'} 
      ${props.inverse && 'button--inverse'}
      ${props.danger && 'button--danger'}`}>
      {props.children}
      </a>
    )
  }
  if(props.to){
    return(
      <Link exact='exact' to={props.to} className=
      {`button button--
      ${props.size || 'default'} 
      ${props.inverse && 'button--inverse'}
      ${props.danger && 'button--danger'}`}>
      {props.children}
      </Link>
    )
  }
  return(
  <button onClick={props.onClick} className=
      {`button button--
      ${props.size || 'default'} 
      ${props.inverse && 'button--inverse'}
      ${props.danger && 'button--danger'}`}>
    {props.children}
  </button>)
}

export default Button;