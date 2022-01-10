import React, {useState} from 'react';

import './PlaceList.css';
import Modal from '../../shared/components/Modal'
import Map from '../../shared/components/Map'
import Button from '../../shared/components/Button'


const PlaceItem = ({id, image, title, address, description, coordinates}) => {
  const [showMap, setShowMap] = useState(false);
  
  const showMapHandle = () => setShowMap(true);
  const hideMapHandle = () => setShowMap(false);
  
  return (
   <>
  <Modal 
    show={showMap} 
    onHide={hideMapHandle}
    header={address}
    contentClass='place__modal-content'
    footerClass='place__modal-actions'
    footer={<Button onClick={hideMapHandle}>CLOSE</Button>}>
      <div className='map-container'>
        <Map center={coordinates} zoom={16}/>
      </div>
  </Modal>
  <li className='PlaceItem'>
     <div className='placeItem__image'>
       <img src={image} alte='title' />
     </div>
     <div className='placeItem__info'>
       <h2>{title}</h2>
       <h2>{address}</h2>
       <p>{description}</p>
     </div>
     <div className='placeItem__action'>
       <Button inverse onClick={showMapHandle}>view</Button>
       <Button to={`place/${id}`}>edit</Button>
       <Button danger>delete</Button>
     </div>
   </li> 
   </> 
  )
}

export default PlaceItem;