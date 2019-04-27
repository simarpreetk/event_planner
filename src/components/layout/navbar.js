import React from 'react'
import { Link } from 'react-router-dom' 
import SignedInLinks from './signinlink'
import SignedOutLinks from './signoutlink'
import {connect} from 'react-redux'



const Navbar = (props) => {
const{auth} =props;
//console.log(auth);
const links = auth.uid ?<SignedInLinks/>: <SignedOutLinks/>;
     return (

             <nav className="purple">
                <div className="container">
                      <Link to ='/' className="brand-logo">Event Planner </Link>
                      {links}
                </div>
             </nav>
    
     
     )

}

const mapStateToProps = (state) =>{

      //console.log(state);

      return{

               auth:state.firebase.auth
      }
}

export default connect(mapStateToProps)(Navbar)