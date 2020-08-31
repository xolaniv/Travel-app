import React from 'react'
import { BarChart,XAxis,YAxis,Tooltip,Bar,Legend } from 'recharts';

function SessionBarChart() {
    const data = [
        { name: 'Canada', uv: 50, pv: 2400, amt: 100 },
        { name: 'United States', uv: 30, pv: 1398, amt: 100 },
        { name: 'South Africa', uv: 40, pv: 9800, amt: 100 },
        { name: 'Egypt', uv: 78, pv: 3908, amt: 100 },
        { name: 'England', uv: 60, pv: 4800, amt: 100 },
        { name: 'Brazil', uv: 70, pv: 3800, amt: 100 },
        { name: 'Solvenia', uv: 90, pv: 4300, amt: 100 },
         {name: 'Argentina', uv: 20, pv: 500, amt: 100}
    ]
    return (

      <div className="bar-chart map-text">
          <BarChart barGap={7} width={350} height={150} data={data}
          margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
           >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
    
      </div>
    );
  }
  
  export default SessionBarChart;