import React from 'react';

//import PlaceItem from './PlaceItem';
import PlaceItem from './PlaceItem'
import './PlaceList.css';

const PlaceList = ({items}) => {
  if(items.length ===0){
    return (
    <>
      <p>Not Found PLACE</p>
      <h2>Create one?</h2>
      <button>등록</button>
    </>
    )
  }
  return (
    <ul className='PlaceList'>
      {items.map((item, idx)=>{
        return <PlaceItem 
      key={idx}
      id={item.id}
      image={item.imageUrl}
      title={item.title}
      description={item.description}
      address={item.address}
      creator={item.creator}
      coordinates={item.location}
      />
      })}
    </ul>
    
  )
}

export default PlaceList;