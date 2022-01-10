import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList'

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
const UserPlaces = () => {
  const userId = useParams().uid;
  const loadedPlaces = PLACE.filter(item => {
    return item.creator === userId})
  return (
    <PlaceList items={loadedPlaces}/>
  )
}

export default UserPlaces;