import React from 'react'
import { Link } from 'react-router-dom' 
import SignedInLinks from './signinlink'
import SignedOutLinks from './signoutlink'
import {connect} from 'react-redux'



const Navbar = () => {

     return (

             <nav className="purple">
                <div className="container">
                      <Link to ='/' className="brand-logo">Event Planner </Link>
                      <SignedInLinks/>
                      <SignedOutLinks/>
                </div>
             </nav>
    
     
     )

}

const mapStateToProps = (state) =>{

      console.log(state);

      return{


      }
}

export default connect(mapStateToProps)(Navbar)