import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../shared/components/Avatar';
import './UserItem.css'

const UserItem = ({image, name, placeCount,id}) => {
    return (
      <li className='UserItem'>
        <Link to={`/${id}/places`}>
        <div className='UserItem__content'>
            <Avatar image={image} name={name}/>
            <div className='UserItem__info'>
                <h2>{name}</h2>
                <h3>{placeCount} {placeCount === 1 ? 'place' : 'places'}</h3>
            </div>
        </div>
        </Link>
      </li>
    );
  }
  
  export default UserItem;
  