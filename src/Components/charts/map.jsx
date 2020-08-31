import React from 'react';
import SessionBarChart from './session-bar-chart';
import { VectorMap } from '@south-paw/react-vector-maps';
import './map.css'
import world from './world.json';
import styled from 'styled-components'


const MapOne = styled.div`
margin: 1rem auto;
width: 300px;

svg {
  stroke: #fff;

  path {
    fill: black;
    outline: none;

    // When a layer is 'selected' (via currentLayers prop).
    &[aria-current='true'] {
      fill: #382ba8;
    }
    &:hover {
      fill: rgba(168,43,43,0.83);
    }

    // When a layer is focused.
    &:focus {
      fill: rgba(168,43,43,0.6);
    }

    &[aria-checked='true'] {
      fill: rgba(56,43,168,1);
    }
    &[id="russia"] {
      fill: rgba(56,43,168,0.6);
    }
  }
}
`;



function Map() {
    return (
      <div className="map-container-one">
        <p className="top-text">SESSION BY COUNTRY</p>
        <div className="float-parent">
          <div>
            <MapOne>
              <VectorMap {...world} checkedLayers={['russia']} />
              </MapOne>
          {/*<VectorMap className="map-element" 
          {...world} checkedLayers={['world']} currentLayers={['world']}
          />*/}
          </div>
        </div>
        <div className="float-child"><SessionBarChart /></div>

      </div>
      
    
    );
  }

  export default Map;
