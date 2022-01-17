import React, {useCallback,useReducer} from 'react';

import Input from '../../shared/components/Input'
import Button from '../../shared/components/Button';

const formReducer = (state, action) => {
  switch (action.type){
    case 'INPUT_CHANGE':
      let formIsValid = true;
      for (const inputId in state.inputs){
        if (inputId === action.inputId){
          formIsValid = formIsValid && action.isValid;
        }else{
          formIsValid = formIsValid && state.inputs[inputId].isValid
        }
      }
      return{
        ...state,
        input: {
          ...state.inputs,
          [action.inputId]:{ value: action.value, isValid: action.isValid}
        },
        isValid: formIsValid
      };
    default:
      return state;
      
  }
}

const NewPlace = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs:{
      title:{
        value: '',
        isValid: false
      },
      description:{
        value: '',
        isValid: false
      },
      address:{
        value: '',
        isValid: false
      }
    },
    isvalid : false
  });
  
  const titleInput = useCallback((id, value, isValid) => {
    dispatch({type: 'INPUT_CHANGE', value: value, isValid: isValid, inputId:id})
  },[])

  const placeSubmitHandle = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
  }
    return (
      <form className='place-form' onSubmit={placeSubmitHandle}>
        <Input id='title' element='input' type ='text' label='Title' validators={[]} errorText={'error'}
        onInput={titleInput}
        />
        <Input id='description' element='textarea' type ='text' label='Title' validators={[]} errorText={'error'}
        onInput={titleInput}
        />
        <Input id='address'element='input' type ='text' label='Title' validators={[]} errorText={'error'}
        onInput={titleInput}
        />
        <Button type='submit' disabled>
          add
        </Button>
      </form>
    );
  }
  
  export default NewPlace;
  