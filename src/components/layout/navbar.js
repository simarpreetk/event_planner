import React from 'react'
import { Link } from 'react-router-dom' 
import SignedInLinks from './signinlink'
import SignedOutLinks from './signoutlink'


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

export default Navbar