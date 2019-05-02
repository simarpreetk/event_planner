import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import Navbar from './components/layout/navbar'
import Dashboard from './components/dashboard/dasboard'
import Eventdetails from './components/event/eventdetails'
import Signin from './components/auth/signin'
import Signup from './components/auth/signup'
import Createevent from './components/event/createevent' 

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/> 
          <switch>
           
            <Route exact path ='/' component={Dashboard}/>
            <Route path ='/event/:id' component={Eventdetails}/>
            <Route exact path ='/signin' component={Signin}/>
            <Route exact path ='/signup' component={Signup}/>
            <Route exact path ='/createvent' component={Createevent}/>
          </switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App