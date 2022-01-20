import React from 'react';
import { useParams} from 'react-router-dom';

import Input from '../../shared/components/Input';
import Button from '../../shared/components/Button';

const PLACE = [{
  id:'156',
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
  id:'157',
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
  const placeId= useParams().pId
  const myPlace = PLACE.find(
    item => item.id === placeId
  )

  if (!myPlace){
    
    return(
      <p>NO pLace</p>
    )
  }
  
  return(
    <form>
      <Input id='title' element='input' label="Title" onInput={()=>{}} value={myPlace.title} />
      <Input id='descript' element='input' label="Descript" onInput={()=>{}} value={myPlace.description}/>
      <Input id='adress' element='input' label="Address" onInput={()=>{}} value={myPlace.address}/>
      <Button>Update</Button>
    </form>
  )
}

export default UpdatePlace