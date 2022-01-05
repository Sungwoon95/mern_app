import React from 'react';

import './Avatar.css';

const UserList = ({name, image}) => {
    return (
      <div className={`avatar ${name}`}>
          <img src={image} alt={name}/>
      </div>
    );
  }
  
  export default UserList;
  