import React,{useReducer, useEffect} from 'react'

import './Input.css'

const inputReducer = (state, action) => {
  switch (action.type){
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: true
      }
    case 'TOUCH':{
      return{
        ...state,
        isTouched: true
      }
    }
    default:
      throw new Error();
  }
}

const Input = props => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: '', 
    isValid: false,
  isTouched:false})

  const {id, onInput} = props;
  const {value, isValid} = inputState

  useEffect(()=>{
    props.onInput(props.id, inputState.value, inputState.isValid)
    }, [id, value, isValid, onInput])

  const changeHandler = (e) => {
    dispatch({type: 'CHANGE', val: e.target.value})
  }
  const touchHandler = () => {
    dispatch({type: 'TOUCH'})
  }
  
  const element = props.element === 'input' ? 
    <input id={props.id} type={props.type} placeholder={props.placeholder} onChange={changeHandler}
    value={inputState.value} onBlur={touchHandler}
    /> : 
    <textarea id={props.id} type={props.type} placeholder={props.placeholder} onChange={changeHandler}
    value={inputState.value} onBlur={touchHandler}/>
  
  return (
    <div className ={`form-control ${!inputState.isValid && !inputState.isTouched && 'invalid'}`}>
      <label htmlFor={props.id}>{props.label}</label>
    {element}
    {!inputState.isValid && !inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  )
};

export default Input