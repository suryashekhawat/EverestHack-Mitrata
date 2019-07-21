import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Chart } from "react-charts";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './home';
import Dashboard from './dashboard';

function App() {
  return (
    <Router>
      <Route path="/dashboard/" component={Dashboard} />
      <Route path="/" exact component={Home} />
    </Router>
  );
}

export default App;
