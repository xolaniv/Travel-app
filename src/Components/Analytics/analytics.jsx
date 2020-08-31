import React from 'react'
import Session from '../charts/session';
import Campaign from '../User/campain'
import UserDecrease from '../User/user-decrease'
import UserInfo from '../User/user-info'
import Map from '../charts/map';
import './Analytics.css';
import { Grid } from '@material-ui/core';


function Analytics() {
    return (
      <div className="">
        <Grid>
          <div>
            <h1 className="heading">Analytics</h1>
          </div>
        <Grid container>
          <Grid>
            <div className="left-div" >
              <UserInfo />
              <UserDecrease />
              <Campaign />
            </div>
            </Grid>
            <Session />
            
        </Grid>

        <Grid container item xs={12} md={12}>
          <Map />
        </Grid>
        </Grid>


        
       {/* <div className="left-div" >
          <UserInfo />
          <UserDecrease />
          <Campaign />
        </div>
        <div className="right-div">
          <Session />
        </div>
        <div>
          <Map />
    </div>*/}
       
      </div>
    );
  }
  
  export default Analytics;