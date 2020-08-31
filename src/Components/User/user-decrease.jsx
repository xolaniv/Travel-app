import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../icons/icons'
import './user-info.css'
import  Container  from 'react-bootstrap/Container';
import { Divider, Statistic } from 'semantic-ui-react'


function UserDecrease() {
    const views = 253
    const decrease = 1.08

    return (
    <div className="info-container-one">
        <div className="top-text">
          <p className="top-text compaign-text">VIEWS PER UPDATE</p>
          <p className="top-text middle-text">{views}</p>
           </div>
        <div className="top-text"><span className="percentage-negetive">-{decrease}% </span>   Since previous month</div>
        <FontAwesomeIcon className="icon" icon="cube" />
      </div>
    );
  }
  
  export default UserDecrease;