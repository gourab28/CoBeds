import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Home from './components/home';
import Navbar from './components/navbar'
import Menu from './components/menu'
import District from './components/district';
import Search from './components/list';
import Pincode from './components/pin';
import Notification from './components/notify';

import './App.css';

function App(props) {
  return (
    <div className="App">
      <Router>
       <Navbar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/district/:district" component={District} />
            <Route path="/pincode/:pin" component={Pincode} />
            <Route path="/list" component={Search} />
            <Route path="/notification" component={Notification} />
        </Switch>
        <Menu />
      </Router>
    </div>
  );
}

export default App;
