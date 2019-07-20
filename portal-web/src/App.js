import React from 'react';
import './App.css';

import { Chart } from "react-charts";


class MyCustomChart  extends React.Component {
  state = {

  }
  constructor(props){
    super(props);
  }
  render() {
    return (
        <div className="left-section">
          my chart

        </div>
    )
  };

}

class RealSurveyData  extends React.Component {
  state = {

  }
  constructor(props){
    super(props);
  }
  render() {
    return (
        <div className="right-section">
          my real survey data

        </div>
    )
  };

}

class SideNav  extends React.Component {
  state = {

  }
  constructor(props){
    super(props);
  }
  render() {
    return (
        <div>
          my sidenav

        </div>
    )
  };

}


function App() {
  return (
    <div className="">
      <SideNav></SideNav>
      <div className="dashboard">
        <MyCustomChart></MyCustomChart>
        <RealSurveyData></RealSurveyData>
      </div>
    </div>
  );
}

export default App;
