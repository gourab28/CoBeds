import React, {useEffect} from 'react';
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
import VaccineWB from './components/vaccine/district';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
function App(props) {
  useEffect(() => {
    getFAQs();
    },[]);
    
    const getFAQs = () => toast.info('Data may be delayed or partial. Please verify with the hospital', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
});;
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
            <Route path="/vaccine/wb/:id" component={VaccineWB} />
        </Switch>
         <ToastContainer />
        <Menu />
      </Router>
    </div>
  );
}

export default App;
