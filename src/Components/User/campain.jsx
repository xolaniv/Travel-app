import React from 'react';

import '../icons/icons'
import './user-info.css'
import logo from './logo.png'

function Campaign() {

    return (
    <div className="info-container-two">
        <div className="compaign-text">Enhance your Campaign for better outreach  </div>
        <img className="image"  alt="Mobile" src={logo} />
      </div>
    );
  }
  
  export default Campaign;