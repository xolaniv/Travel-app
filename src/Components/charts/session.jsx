import React from 'react'
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AreaChart, CartesianGrid,XAxis,YAxis,Tooltip,Area } from 'recharts';
import './session.css'

function Session() {
    const data = [
        { name: 'Aug 1', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Aug 2', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Aug 3', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'Aug 4', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'Aug 5', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'Aug 6', uv: 2390, pv: 3800, amt: 2500 },
        { name: 'Aug 7', uv: 3490, pv: 4300, amt: 2100 },
         {name: 'Aug 8', uv: 5000, pv: 500, amt: 3000},
         {name: 'Aug 9', uv: 2000, pv: 400, amt: 2400},
         {name: 'Aug 10', uv: 2200, pv: 400, amt: 2500},
         {name: 'Aug 11', uv: 2500, pv: 400, amt: 2600},
         {name: 'Aug 12', uv: 2600, pv: 400, amt: 2800},
         {name: 'Aug 13', uv: 3000, pv: 400, amt: 2900},

    ]
    return (
    <div className="container">
        <div>
        <p className="text">Sessions Overview</p>
        </div>
        <div className="map-text">
     <AreaChart width={720} height={200} data={data}>
         <defs>
             <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                 <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                 <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                 </linearGradient>
         </defs>
         <XAxis dataKey="name" />
         <YAxis />
         <CartesianGrid strokeDasharray="3 3" />
         <Tooltip />
         <Area type="monotone" dataKey="uv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorUv)" />
     </AreaChart>
     </div>
     </div>
    );
  }
  
  export default Session;