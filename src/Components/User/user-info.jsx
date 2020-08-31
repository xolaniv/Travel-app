import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../icons/icons'
import './user-info.css'
import  Container  from 'react-bootstrap/Container';
import { Statistic } from 'semantic-ui-react'

function UserInfo() {
    const users = 60;
    const percentatge = 5.17

    return (
    <div className="info-container">
        <div className="top-text">
          <p className="top-text compaign-text">ACTIVE USERS</p>
          <p className="top-text middle-text">{users}</p>
           </div>
        <div className="top-text"><span className="percentage"> +{percentatge}%  </span>   Since last month</div>
        <FontAwesomeIcon className="icon" icon="user-friends" />
      </div>
    );
  }
  
  export default UserInfo;