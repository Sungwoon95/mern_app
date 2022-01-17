import React from 'react';
import { useParams} from 'react-router-dom';

const PLACE = [{
  id:156,
  imageUrl:156,
  title:156,
  description:156,
  address:156,
  creator:'may',
  coordinates:{
    lat: 40.748,
    lng: -73.9878
  },
},
{
  id:157,
  imageUrl:156,
  title:156,
  description:156,
  address:156,
  creator:'boom',
  coordinates:{
    lat: 40.748,
    lng: -73.9878
  },
},]

const UpdatePlace = () => {
  const placeId= useParams().placeId
  const myPlace = PLACE.find(
    item => item.id === placeId
  )

  if (!myPlace){
    return(
      <p>NO pLace</p>
    )
  }
  
  return(
    <>
    Update Place
    </>
  )
}

export default UpdatePlace