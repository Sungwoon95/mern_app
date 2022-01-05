import React from 'react';
import UserItem from './UserItem';

import './UserList.css';

const UserList = ({items}) => {
    if (items.length === 0){
        return (
        <div>
            <h2>No user</h2>
        </div>)
    }
    return (
      <ul>
          {items.map((user, idx)=>{
              return <UserItem key={idx} id={user.id} image={user.image} name={user.name}
              placeCount={user.places}/>;
          })}
      </ul>
    );
  }
  
  export default UserList;
  