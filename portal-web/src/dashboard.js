import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
const data = [
  {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 200, pv: 1000, amt: 2400},
  {name: 'Page B', uv: 200, pv: 1000, amt: 2400},
  {name: 'Page B', uv: 200, pv: 1000, amt: 2400},
  {name: 'Page B', uv: 200, pv: 1000, amt: 2400},
  {name: 'Page B', uv: 200, pv: 1000, amt: 2400},
  {name: 'Page B', uv: 200, pv: 1000, amt: 2400},
  {name: 'Page B', uv: 200, pv: 1000, amt: 2400},
  {name: 'Page B', uv: 200, pv: 1000, amt: 2400},
  {name: 'Page B', uv: 200, pv: 1000, amt: 2400},

];

export default class Dashboard  extends React.Component {
  state = {

  }
  constructor(props){
    super(props);
  }
  render() {
    return (
        <div className="dashboard">
          <div className="left-section">
            <LineChart width={600} height={300} data={data}>
             <Line type="monotone" dataKey="uv" stroke="#8884d8" />
             <CartesianGrid stroke="#ccc" />
             <XAxis dataKey="name" />
             <YAxis />
           </LineChart>
          </div>
          <div className="right-section">
            Past Data
          </div>
        </div>
    )
  };

}
